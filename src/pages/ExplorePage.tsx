import ExploreNavbar from "../components/ExploreNavbar";
import FillterBtn from "../components/FillterBtn";

const ExplorePage = () => {
  return (
    <div className="my-4 max-lg:px-5 w-screen min-h-screen overflow-hidden">
      <ExploreNavbar />
      <div className="container w-full bg-tertiary">
        <div className="flex-center w-full h-full">
          <div className="">
            <h2 className="">Explore Premium Listings</h2>
            <p className="">Currated properties for the modern professional.</p>
          </div>
          <div className="flex-center">
            <FillterBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
