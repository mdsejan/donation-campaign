import { createBrowserRouter } from "react-router-dom";
import LayoutsMain from "../layouts/LayoutsMain";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutsMain></LayoutsMain>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("donations.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

export default router;
