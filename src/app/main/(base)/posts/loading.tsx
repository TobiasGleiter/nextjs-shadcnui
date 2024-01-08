import { MainHeader } from "@/components/navigation/main-header";

export default function Loading() {
  return (
    <div>
      <MainHeader
        heading={"Settings"}
        text="Manage account and website settings."
      ></MainHeader>
      <div>Loading...</div>
    </div>
  );
}
