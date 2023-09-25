import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";

const LayoutsMain = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = `Donation Campaign`;
    } else {
      document.title = `${location.pathname.replace("/", "")}`;
    }

    if (location.state) {
      document.title = `Donation _ ${location.state}`;
    }
  }, [location.pathname, location.state]);
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutsMain;
