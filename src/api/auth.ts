import type { LoginInfo, UserData } from "../types/index";

export const login = async ({ email, password }: LoginInfo) => {
  const res = await fetch("/frontend_db.json");
  const data = await res.json();
  const users: UserData[] = data.users;

  const user = users.find(
    (uData) => uData.email === email && uData.password === password,
  );

  if (!user) {
    throw new Error("Invalid email or password");
  }

  return user;
};
