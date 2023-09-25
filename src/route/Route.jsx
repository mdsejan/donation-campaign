import { createBrowserRouter } from "react-router-dom";
import LayoutsMain from "../layouts/LayoutsMain";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import DonationDetails from "../pages/DonationDetails/DonationDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutsMain></LayoutsMain>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/donations/:id",
        loader: () => fetch("donations.json"),
        element: <DonationDetails></DonationDetails>,
      },
    ],
  },
]);

export default router;
