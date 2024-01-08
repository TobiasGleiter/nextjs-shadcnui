import { MainHeader } from "@/components/navigation/main-header";

export default function Loading() {
  return (
    <div>
      <MainHeader
        heading={"Billing"}
        text="Manage billing and your subscription plan."
      ></MainHeader>
      <div>Loading...</div>
    </div>
  );
}
