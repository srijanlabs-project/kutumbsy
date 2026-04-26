import { MemberProfileWorkspace } from "./workspace";

type PageProps = {
  params: Promise<{ personId: string }>;
};

export default async function MemberProfilePage({ params }: PageProps) {
  const { personId } = await params;
  return <MemberProfileWorkspace personId={personId} />;
}
