import { all_routes } from "../../../feature-module/router/all_routes";
const routes = all_routes;

export const SidebarData = [
  {
    label: "",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Main",
    submenuItems: [
      {
        label: "Dashboard",
        icon: "ti ti-layout-dashboard",
        submenu: false,
        showSubRoute: false,
        link: routes.adminDashboard,
        themeSetting: true,
      },
      {
        label: "Student",
        icon: "ti ti-layout-dashboard",
        submenu: false,
        showSubRoute: false,
        link: routes.student,
        themeSetting: true,
      },
      {
        label: "Study Tools",
        icon: "ti ti-tool",
        submenu: true,
        showSubRoute: false,

        submenuItems: [
          { label: "Strategy Video", link: routes.strategyVideo },
          { label: "Templates", link: routes.template },
          { label: "Grammars", link: routes.grammar },
          { label: "Prediction File", link: routes.predictionFile },
        ],
      },
      {
        label: "Mock Test Coupons",
        icon: "fa fa-tags",
        submenu: false,
        showSubRoute: false,
        link: routes.mockTestCoupon,
        themeSetting: true,
      },
      {
        label: "Subscription",
        icon: "ion-cash",
        submenu: false,
        showSubRoute: false,
        link: routes.buyer,
        themeSetting: true,
      },
      {
        label: "Transaction History",
        icon: "ion-document-text",
        submenu: false,
        showSubRoute: false,
        link: routes.transactionHistory,
        themeSetting: true,
      },
      {
        label: "Branch",
        icon: "fa fa-bullseye",
        submenu: false,
        showSubRoute: false,
        link: routes.branch,
        themeSetting: true,
      },
      {
        label: "Brand",
        icon: "fa fa-clone",
        submenu: false,
        showSubRoute: false,
        link: routes.branding,
        themeSetting: true,
      },
      {
        label: "Setting",
        icon: "ion-gear-b",
        submenu: false,
        showSubRoute: false,
        link: routes.setting,
        themeSetting: true,
      },
      {
        label: "Support",
        icon: "ion-headphone",
        submenu: false,
        showSubRoute: false,
        link: routes.help,
        themeSetting: true,
      },
    ],
  },
];
