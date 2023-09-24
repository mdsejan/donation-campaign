import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const LayoutsMain = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutsMain;
