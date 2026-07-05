import { Icon } from "@iconify/react";

const ExploreNavbar = () => {
  return (
    <nav>
      <div className="flex items-center w-full justify-around bg-white shadow-sm pb-3 max-lg:justify-between ">
        <a className="md:text-base text-sm" href="#">
          <p className="text-3xl font-bold text-primary">Nobzo Lite</p>
        </a>

        <ul className="flex-center lg:gap-12 gap-7 max-sm:hidden text-lg font-medium">
          <a href="#">Feed</a>
          <a href="#">Explore</a>
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

        <div className="flex items-center justify-center gap-10">
          <button className="p-3 w-40 rounded-sm text-lg font-semibold bg-primary text-tertiary max-lg:hidden">
            Post Listing
          </button>

          <Icon className="size-7 text-neutral`" icon="mdi:bell-outline" />
          <Icon
            className="size-7 text-neutral`"
            icon="material-symbols:settings-outline"
          />

          <div className="size-8 rounded-full overflow-hidden">
            <img src="/images/profile.jpg" alt="profile" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ExploreNavbar;
