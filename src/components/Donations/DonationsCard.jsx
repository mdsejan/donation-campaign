import { NavLink } from "react-router-dom";

const DonationsCard = () => {
  return (
    <NavLink to="/donation">
      <div className="card card-compact rounded-md bg-[#0052FF26]">
        <figure>
          <img
            className="w-full h-52 object-cover"
            src="https://i.ibb.co/Y3QNw7G/Food.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div>
            <span className="px-2 py-1 rounded-sm text-[#0052FF] bg-[#AEC9FC]">
              Health
            </span>
          </div>
          <h2 className="card-title text-[#0052FF]">
            Clean water for children
          </h2>
        </div>
      </div>
    </NavLink>
  );
};

export default DonationsCard;
