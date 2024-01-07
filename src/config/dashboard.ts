import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [],
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/main/dashboard",
    },
    {
      title: "Posts",
      href: "/main/posts",
      icon: "post",
    },
    {
      title: "Billing",
      href: "/main/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/main/settings",
      icon: "settings",
    },
  ],
};
