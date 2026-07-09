import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router";
import { navLinks } from "../types";
import { useState } from "react";
import SignOutButton from "./SignOutButton";

function SideBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const sidebarContent = (
    <>
      <div className="pl-10 max-lg:pl-6 max-lg:pt-2 flex-between">
        <div>
          <Link className="md:text-base text-sm " to="/" viewTransition>
            <h1 className="text-primary text-3xl font-bold">Nobzo Lite</h1>
          </Link>
          <p className="font-medium text-md">Admin console</p>
        </div>
        <button
          onClick={() => setDrawerOpen(false)}
          className="hidden max-lg:flex-center max-lg:flex size-9 mr-4 rounded-lg border border-neutral/30"
        >
          <Icon className="size-5 text-neutral" icon="mdi:close" />
        </button>
      </div>
      <div className="h-full pb-10">
        <ul className="flex flex-col gap-5 text-xl mt-10 text-neutral border-b pb-30">
          {navLinks.map((nav) => (
            <li key={nav.label}>
              <NavLink
                viewTransition
                onClick={() => setDrawerOpen(false)}
                className={({ isActive }) =>
                  `flex-gap pl-10 py-3 ${
                    isActive
                      ? "text-primary border-r-3 bg-blue-100"
                      : "text-neutral"
                  }`
                }
                to={nav.path}
              >
                <Icon className="size-6" icon={nav.icon} />
                <p>{nav.label}</p>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex-center w-full mt-5 max-lg:block hidden pl-10">
          <SignOutButton />
        </div>

        <div className="flex-center flex-col h-full w-full pt-5 gap-5">
          <button className="text-xl flex-center bg-primary p-4 text-white font-semibold px-6 rounded-lg">
            <Icon className="size-6" icon="mdi:plus" /> List New Property
          </button>
          <div className="flex-center gap-4">
            <div className="rounded-full">
              <img
                className="rounded-full size-10"
                src="/images/profile.jpg"
                alt="User-Profile"
              />
            </div>
            <div>
              <p>Admin Profile</p>
              <p>admin@nobzo.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar — unchanged */}
      <div className="w-full max-w-xs h-full pt-10 border-r border-neutral max-lg:hidden">
        {sidebarContent}
      </div>

      {/* Mobile top bar with hamburger trigger */}
      <div className="hidden max-lg:flex-between absolute w-full border-b border-neutral px-5 py-4">
        <Link to="/">
          <h1 className="text-primary text-2xl font-bold">Nobzo Lite</h1>
        </Link>
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex-center size-10 rounded-lg border border-neutral/30"
        >
          <Icon className="size-6 text-neutral" icon="mdi:menu" />
        </button>
      </div>

      {/* Backdrop overlay */}
      {drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          className="hidden max-lg:block fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Sliding Drawer */}
      <div
        className={`hidden max-lg:block fixed top-0 left-0 h-full w-full max-w-xs bg-white pt-10 z-50 transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </div>
    </>
  );
}

export default SideBar;
