import { Icon } from "@iconify/react";
import { navLinks } from "../types";
import { useLocation } from "react-router";
import SignOutButton from "./SignOutButton";

const DashboardNav = () => {
  const { pathname } = useLocation();

  const currentTab =
    navLinks.find((nav) => pathname.startsWith(nav.path))?.label ?? "Dashboard";

  return (
    <div className="flex justify-between items-center w-full mt-5 gap-4 shadow-sm pb-3 px-10 ">
      <nav className="text-3xl max-lg:hidden font-bold text-primary">{currentTab}</nav>
      <div className="relative w-full max-w-md block max-lg:hidden">
        <input
          className="w-full max-w-md outline-0 px-15 rounded-full border border-neutral/20 bg-tertiary shadow-sm h-14 text-lg "
          placeholder="Search properties..."
          type="search"
        />
        <Icon
          className="absolute inset-3 size-8 text-neutral/30"
          icon="lucide:search"
        />
      </div>

      <div className="flex items-center justify-center gap-10 max-md:gap-5 max-lg:hidden">
        <Icon className="size-7 text-neutral`" icon="mdi:bell-outline" />
        <Icon
          className="size-7 text-neutral`"
          icon="material-symbols:settings-outline"
        />
        <button className="p-3 w-40 rounded-sm text-lg font-semibold bg-primary text-tertiary max-lg:hidden">
          Post Listing
        </button>
      </div>
      <div className="max-lg:hidden block">
              <SignOutButton />

      </div>
    </div>
  );
};

export default DashboardNav;
