import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AuthWorkspace } from "./workspace";

type PlatformAuthPageProps = {
  searchParams?: Promise<{ mode?: string }>;
};

export default async function PlatformAuthPage({ searchParams }: PlatformAuthPageProps) {
  const cookieStore = await cookies();
  const hasSession = Boolean(cookieStore.get("kutumbsy_session")?.value);

  if (hasSession) {
    redirect("/family-space");
  }

  const params = searchParams ? await searchParams : undefined;
  return <AuthWorkspace key={params?.mode ?? "login"} />;
}
