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
  const finalSlug = slugify(slug ?? "") || slugify(name);

  if (!finalSlug) {
    res.status(400).json({ error: "slug could not be generated" });
    return;
  }

  const shouldCreateInitialAdmin = Boolean(initialAdminName || initialAdminMobileNumber);
  if (shouldCreateInitialAdmin && (!initialAdminName || !initialAdminMobileNumber)) {
    res.status(400).json({ error: "initial family space admin name and mobile number are both required" });
    return;
  }

  const initialAdminMobile = initialAdminMobileNumber ? sanitizeMobile(initialAdminMobileNumber) : "";

  const auth = req.authContext;
  const result = await prisma.$transaction(async (tx) => {
    const familyCode = await generateUniqueFamilyCode(tx);

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

      const initialUser =
        (await tx.user.findUnique({
          where: { mobileNumber: initialAdminMobile },
        })) ??
        (await tx.user.create({
          data: {
            fullName: initialAdminName.trim(),
            mobileNumber: initialAdminMobile,
            passwordHash: null,
            phoneVerifiedAt: null,
          },
        }));

      await tx.familyMembership.upsert({
        where: {
          familyId_userId: {
            familyId: createdFamily.id,
            userId: initialUser.id,
          },
        },
        update: {
          role: "admin",
          status: "active",
        },
        create: {
          familyId: createdFamily.id,
          userId: initialUser.id,
          role: "admin",
          status: "active",
        },
      });

      await tx.userPersonLink.upsert({
        where: {
          familyId_userId: {
            familyId: createdFamily.id,
            userId: initialUser.id,
          },
        },
        update: {
          personId: initialPerson.id,
        },
        create: {
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
