import { MainHeader } from "@/components/navigation/main-header";

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
};

export default async function SettingsPage() {
  return (
    <div>
      <MainHeader
        heading={"Settings"}
        text="Manage account and website settings."
      ></MainHeader>
    </div>
  );
}
