import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LandingPage from "./landing/LandingPage";

export default async function Page() {
  const cookieStore = await cookies();
  const hasSession = Boolean(cookieStore.get("kutumbsy_session")?.value);

  if (hasSession) {
    redirect("/family-space");
  }

  return <LandingPage />;
}
