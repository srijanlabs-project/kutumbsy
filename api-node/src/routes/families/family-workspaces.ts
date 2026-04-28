import { Router } from "express";
import prisma from "../../db.js";
import { protectNullableText } from "../../security/crypto.js";
import { generateUniqueFamilyCode, sanitizeMobile } from "../../modules/families/utils.js";
import { getWorkspaceMembership } from "../../modules/families/access.js";
import { writeFamilyAuditLog } from "../../modules/families/audit.js";
import { revealFamily } from "../../modules/families/serializers.js";
import { createFamilySchema } from "../../modules/families/schemas.js";
import { slugify } from "../../modules/families/utils.js";

const router = Router();

const resolveUniqueFamilySlug = async (
  tx: Parameters<Parameters<typeof prisma.$transaction>[0]>[0],
  baseSlug: string,
) => {
  const normalizedBase = baseSlug.trim().toLowerCase();
  let candidate = normalizedBase;
  let suffix = 2;

  while (true) {
    const existing = await tx.family.findUnique({
      where: { slug: candidate },
      select: { id: true },
    });

    if (!existing) {
      return candidate;
    }

    candidate = `${normalizedBase}-${suffix}`;
    suffix += 1;
  }
};

router.get("/families", async (req, res) => {
  const auth = req.authContext;
  const scope = String(req.query.scope ?? "").trim().toLowerCase();
  const discoverMode = scope === "discover" || scope === "all";
  const rows =
    discoverMode
      ? await prisma.family.findMany({
          orderBy: { createdAt: "desc" },
        })
      : auth?.kind === "session" && auth.userId
      ? await prisma.family.findMany({
          where: {
            memberships: {
              some: {
                userId: auth.userId,
                status: "active",
              },
            },
          },
          orderBy: { createdAt: "desc" },
        })
      : await prisma.family.findMany({
          orderBy: { createdAt: "desc" },
        });

  res.json({ data: rows.map(revealFamily) });
});

router.post("/families", async (req, res) => {
  const parsed = createFamilySchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid request body" });
    return;
  }

  const { name, slug, description, nativePlace, createdByPhone, initialAdminName, initialAdminMobileNumber } = parsed.data;
  const requestedSlug = slugify(slug ?? "") || slugify(name);

  if (!requestedSlug) {
    res.status(400).json({ error: "slug could not be generated" });
    return;
  }

  const shouldCreateInitialAdmin = Boolean(initialAdminName || initialAdminMobileNumber);
  if (shouldCreateInitialAdmin && (!initialAdminName || !initialAdminMobileNumber)) {
    res.status(400).json({ error: "initial family space admin name and mobile number are both required" });
    return;
  }

  const initialAdminMobile = initialAdminMobileNumber ? sanitizeMobile(initialAdminMobileNumber) : "";
  if (shouldCreateInitialAdmin) {
    const existingUser = await prisma.user.findUnique({
      where: { mobileNumber: initialAdminMobile },
    });

    if (existingUser) {
      res.status(409).json({ error: "initial family space admin mobile number is already in use" });
      return;
    }
  }

  const auth = req.authContext;
  const result = await prisma.$transaction(async (tx) => {
    const familyCode = await generateUniqueFamilyCode(tx);
    const finalSlug = await resolveUniqueFamilySlug(tx, requestedSlug);

    const createdFamily = await tx.family.create({
      data: {
        name,
        slug: finalSlug,
        familyCode,
        description: description?.trim() || null,
        nativePlace: nativePlace?.trim() || null,
        createdByPhone: protectNullableText(createdByPhone),
      },
    });

    if (shouldCreateInitialAdmin && initialAdminName) {
      const initialPerson = await tx.person.create({
        data: {
          familyId: createdFamily.id,
          fullName: protectNullableText(initialAdminName) ?? initialAdminName,
          metadata: {},
        },
      });

      const initialUser = await tx.user.create({
        data: {
          fullName: initialAdminName.trim(),
          mobileNumber: initialAdminMobile,
          passwordHash: null,
          phoneVerifiedAt: null,
        },
      });

      await tx.familyMembership.create({
        data: {
          familyId: createdFamily.id,
          userId: initialUser.id,
          role: "admin",
        },
      });

      await tx.userPersonLink.create({
        data: {
          familyId: createdFamily.id,
          userId: initialUser.id,
          personId: initialPerson.id,
        },
      });

      return {
        family: createdFamily,
        initialAdmin: {
          userId: initialUser.id,
          personId: initialPerson.id,
          fullName: initialUser.fullName,
          mobileNumber: initialUser.mobileNumber,
        },
      };
    }

    if (auth?.kind === "session" && auth.userId) {
      await tx.familyMembership.create({
        data: {
          familyId: createdFamily.id,
          userId: auth.userId,
          role: "admin",
        },
      });
    }

    return {
      family: createdFamily,
      initialAdmin: null,
    };
  });

  await writeFamilyAuditLog(req, {
    familyId: result.family.id,
    action: "family.created",
    entityType: "family",
    entityId: result.family.id,
    metadata: {
      slug: result.family.slug,
      familyCode: result.family.familyCode,
      initialAdminMobileNumber: result.initialAdmin?.mobileNumber ?? null,
    },
  });

  res.status(201).json({
    data: {
      ...revealFamily(result.family),
      initialAdmin: result.initialAdmin,
    },
  });
});

export default router;
