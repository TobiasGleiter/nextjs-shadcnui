import { PostCreateButton } from "@/components/button/post-create-button";
import { MainHeader } from "@/components/navigation/main-header";

export default function PostsPage() {
  return (
    <div>
      <MainHeader heading={"Posts"} text="Create and manage posts">
        <PostCreateButton />
      </MainHeader>
    </div>
  );
}
