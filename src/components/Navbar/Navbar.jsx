import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-base-100 lg:bg-transparent py-2 ">
      <div className="max-w-screen-2xl mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-auto p-7 flex justify-center">
          <NavLink to="/">
            <img
              className="h-12"
              src="https://i.ibb.co/PZDQVpY/logo.png"
              alt="logo"
            />
          </NavLink>
        </div>

        <ul className="w-full md:w-auto flex justify-center space-x-4 px-4 ">
          <li>
            <NavLink to="/" className="hover:text-[#FF444A]">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/Donation" className="hover:text-[#FF444A]">
              Donation
            </NavLink>
          </li>

          <li>
            <NavLink to="/statistics" className="hover:text-[#FF444A]">
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
