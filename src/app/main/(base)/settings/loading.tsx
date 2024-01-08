import { MainHeader } from "@/components/navigation/main-header";

export default function Loading() {
  return (
    <div>
      <MainHeader heading={"Posts"} text="Create and manage posts"></MainHeader>
      <div>Loading...</div>
    </div>
  );
}
