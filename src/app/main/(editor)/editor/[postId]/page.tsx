import { getCurrentUser } from "@/lib/auth/session";

interface EditorPageProps {
  params: { postId: string };
}

export default async function EditorPage({ params }: EditorPageProps) {
  const user = await getCurrentUser();

  return <div>Editor</div>;
}
