import { createBrowserRouter } from "react-router";
import SignInPage from "../pages/SignInPage";
import ExplorePage from "../pages/ExplorePage";
import PropertyDetailsPage from "../pages/PropertyDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
  },
  { path: "/Explore", element: <ExplorePage /> },
  {
    path: "",
    element: <PropertyDetailsPage />,
  },
  {
    path: "/Sign in",
    element: <SignInPage />,
  },
]);
