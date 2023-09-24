import { createBrowserRouter } from "react-router-dom";
import LayoutsMain from "../layouts/LayoutsMain";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutsMain></LayoutsMain>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
