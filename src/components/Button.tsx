import { Icon } from "@iconify/react";
import { type ButtonProps } from "../types";

const Button = ({ icon, title}: ButtonProps) => {
  return (
    <button
      className="border-2 border-secondary/20 cursor-pointer p-2 flex-center gap-3 font-bold text-neutral w-full max-w-45 text-md rounded-lg hover:bg-primary hover:text-white"
    >
      <span>
        <Icon icon={icon} />
      </span>
      {title}
    </button>
  );
};

export default Button;
