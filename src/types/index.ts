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
