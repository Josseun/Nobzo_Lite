import { Icon } from "@iconify/react";
import { Outlet, NavLink, Link } from "react-router";

const navLink = [
  { label: "Feed", path: "/" },
  { label: "Saved", path: "/saved" },
];

export default function MainLayout() {
  return (
    <div>
      <nav className="flex items-center justify-between shadow-sm px-8 py-4">
        <Link className="md:text-base text-sm" to="/" viewTransition>
          <h1 className="text-primary text-3xl font-bold">Nobzo Lite</h1>
        </Link>

        <ul className="flex gap-6 max-md:hidden">
          {navLink.map((nav) => (
            <li key={nav.path}>
              <NavLink
                viewTransition
                to={nav.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-teal-700 pb-2 border-b-2 border-primary font-semibold"
                    : "text-gray-700"
                }
              >
                {nav.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="relative w-full max-w-md max-xl:hidden">
          <input
            className="w-full max-w-md outline-0 px-15 rounded-full border border-neutral/20 bg-tertiary shadow-sm h-14 text-lg"
            placeholder="Search properties..."
            type="search"
          />
          <Icon
            className="absolute inset-3 size-8 text-neutral/30"
            icon="lucide:search"
          />
        </div>

        <div className="flex items-center justify-center gap-10 max-md:gap-5">
          <button className="p-3 w-40 rounded-sm text-lg font-semibold bg-primary text-tertiary max-lg:hidden">
            Post Listing
          </button>

          <Icon className="size-7 text-neutral`" icon="mdi:bell-outline" />
          <Icon
            className="size-7 text-neutral`"
            icon="material-symbols:settings-outline"
          />

          <Link
            to="/dashboard/properties"
            className="size-8 rounded-full overflow-hidden"
          >
            <img src="/images/profile.jpg" alt="profile" />
          </Link>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}
