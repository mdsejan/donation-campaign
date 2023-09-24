import { Outlet } from "react-router-dom";

const LayoutsMain = () => {
  return (
    <div>
      <h1>Main Layout</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutsMain;
