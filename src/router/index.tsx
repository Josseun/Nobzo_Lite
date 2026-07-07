import { createBrowserRouter } from "react-router";
import SignInPage from "../pages/SignInPage";
import FeedPage from "../pages/FeedPage";
import ExplorePropertyPage from "../pages/ExplorePropertyPage";
import DashBoard from "../pages/DashBoard";
import MainLayout from "../layouts/MainLayout";
import Saved from "../pages/Saved";

export const router = createBrowserRouter([
  { path: "/signin", element: <SignInPage /> },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <FeedPage /> },
      { path: "/property/:id", element: <ExplorePropertyPage /> },
      { path: "/dashboard", element: <DashBoard /> },
    ],
  },
  { path: "/saved", element: <Saved /> },
]);
