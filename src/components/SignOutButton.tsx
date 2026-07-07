import { Icon } from "@iconify/react";
import { useNavigate } from "react-router";

const SignOutButton = () => {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    navigate("/signin", { replace: true });
  };
  return (
    <button
      onClick={signOut}
      className="flex items-center gap-2 text-sm font-medium text-neutral hover:text-red-600"
    >
      <Icon className="size-5" icon="material-symbols:logout" />
      Sign Out
    </button>
  );
};

export default SignOutButton;
