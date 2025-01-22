import {
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Home", href: "/home", icon: HomeIcon, current: true },
  {
    name: "Upload Statment",
    href: "/upload-statement",
    icon: ClockIcon,
    current: false,
  },
  { name: "Category", href: "/category", icon: ScaleIcon, current: false },
  { name: "Banks", href: "/banks", icon: CreditCardIcon, current: false },
  {
    name: "Users",
    href: "/users",
    icon: UserGroupIcon,
    current: false,
  },
  { name: "Reports", href: "#", icon: DocumentChartBarIcon, current: false },
];
export const secondaryNavigation = [
  { name: "Settings", href: "/settings", icon: CogIcon },
  { name: "FAQ", href: "/faq", icon: QuestionMarkCircleIcon },
  { name: "Privacy", href: "/privacy", icon: ShieldCheckIcon },
];
