export interface UserData {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface LoginInfo {
  email: string;
  password: string;
}

export interface ButtonProps {
  icon: string;
  title: string;
  // onClick: () => void;
}

export interface FilterBtnProps {
  name: string;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

export interface property {
  id: number;
  title: string;
  description: string;
  location: string;
  price: number;
  type: string;
  image: string;
}

export interface propCardProps {
  prop: property;
  commentCount: number;
  likeCount: number;
  liked: boolean;
  onLike: (propertyId: number) => void;
}

export interface CommentType {
  id: number;
  propertyId: number;
  user: string;
  text: string;
  createdAt: string;
}

export interface LikesType {
  id: number;
  propertyId: number;
  userId: number;
}

export interface NavLinkType {
  label: string;
  icon: string;
  path: string;
}

export interface StatCard {
  icon: string;
  label: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
}

export interface PropertyInventory {
  id: string;
  title: string;
  address: string;
  type: string;
  category: string;
  status: "Active" | "Pending Review" | "Leased";
  action: string;
  image: string;
}

export const filter: string[] = ["All Properties", "rent", "sale"];

export const navLinks: NavLinkType[] = [
  {
    icon: "material-symbols:dynamic-feed-rounded",
    label: "Feed",
    path: "/dashboard/feed",
  },
  {
    icon: "material-symbols:apartment",
    label: "Properties",
    path: "/dashboard/properties",
  },
  {
    icon: "material-symbols:group-outline",
    label: "Users",
    path: "/dashboard/users",
  },
  {
    icon: "ic:outline-assessment",
    label: "Reports",
    path: "/dashboard/reports",
  },
];

export const stats: StatCard[] = [
  {
    icon: "material-symbols:apartment",
    label: "Total Properties",
    value: "124",
    change: "+12%",
    changeType: "positive",
  },
  {
    icon: "material-symbols:person-search-outline",
    label: "Active Prospects",
    value: "852",
    change: "+5%",
    changeType: "positive",
  },
  {
    icon: "material-symbols:check-circle-outline",
    label: "Occupancy Rate",
    value: "94%",
    change: "Stable",
    changeType: "neutral",
  },
  {
    icon: "material-symbols:payments-outline",
    label: "Monthly Revenue",
    value: "$42k",
    change: "-2%",
    changeType: "negative",
  },
];

export const statusStyles: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  "Pending Review": "bg-yellow-100 text-yellow-700",
  Leased: "bg-blue-100 text-secondary",
};

export const changeStyles: Record<StatCard["changeType"], string> = {
  positive: "bg-green-100 text-green-700",
  negative: "bg-red-100 text-red-600",
  neutral: "bg-blue-100 text-secondary",
};


