import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import ExplorePodcasts from "./pages/ExplorePodcasts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "explore-podcasts",
        element: <ExplorePodcasts />,
      },
    ],
  },
]);

export default router;
