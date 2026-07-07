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

interface NavLinkType {
  label: string;
  path: string;
}

export const filter: string[] = ["All Properties", "rent", "sale"];

export const navLink: NavLinkType[] = [
  { label: "Explore", path: "/" },
  { label: "Saved", path: "/saved" },
];
