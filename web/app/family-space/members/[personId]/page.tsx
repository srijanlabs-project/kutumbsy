import { MemberProfileWorkspace } from "../../../tenant/workspace/members/[personId]/workspace";

type PageProps = {
  params: Promise<{ personId: string }>;
};

export default async function FamilySpaceMemberPage({ params }: PageProps) {
  const { personId } = await params;
  return <MemberProfileWorkspace personId={personId} />;
}
