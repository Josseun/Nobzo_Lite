import { createBrowserRouter } from "react-router";
import SignInPage from "../pages/SignInPage";
import FeedPage from "../pages/FeedPage";
import ExplorePropertyPage from "../pages/ExplorePropertyPage";
import DashBoard from "../pages/DashBoard";
import MainLayout from "../layouts/MainLayout";
import Saved from "../pages/Saved";
import DashboardFeed from "../Section/DashboardFeed";
import DashboardProperties from "../Section/DashboardProperties";
import DashboardUsers from "../Section/DashboardUsers";
import DashboardReports from "../Section/DashboardReports";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
  { path: "/signin", element: <SignInPage /> },

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          { index: true, element: <FeedPage /> },
          { path: "/property/:id", element: <ExplorePropertyPage /> },
        ],
      },
      { path: "/saved", element: <Saved /> },
      {
        path: "/dashboard",
        element: <DashBoard />,
        children: [
          { path: "feed", element: <DashboardFeed /> },
          { path: "properties", element: <DashboardProperties /> },
          { path: "users", element: <DashboardUsers /> },
          { path: "reports", element: <DashboardReports /> },
        ],
      },
    ],
  },
]);
