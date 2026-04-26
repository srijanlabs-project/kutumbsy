import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type PlatformAuthPageProps = {
  searchParams?: Promise<{ mode?: string }>;
};

export default async function PlatformAuthPage({ searchParams }: PlatformAuthPageProps) {
  const cookieStore = await cookies();
  const hasSession = Boolean(cookieStore.get("kutumbsy_session")?.value);
  const params = searchParams ? await searchParams : undefined;

  if (!hasSession) {
    const target = params?.mode === "register" ? "/?auth=register" : "/?auth=login";
    redirect(target);
  }

  redirect("/family-space");
}
