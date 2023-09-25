import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationListCard = ({ donation }) => {
  const {
    id,
    image,
    title,
    category,
    category_bg,
    card_bg,
    text_color,
    price,
  } = donation || {};
  return (
    <div
      className="card h-full rounded-lg grid grid-cols-1  md:grid-cols-5"
      style={{ backgroundColor: card_bg }}
    >
      <div className="md:col-span-2">
        <figure className="h-full">
          <img
            className="w-full h-full object-cover rounded-s-lg"
            src={image}
            alt={title}
          />
        </figure>
      </div>
      <div className="card-body md:col-span-3">
        <div>
          <span
            className="px-2 py-1 rounded-sm"
            style={{ backgroundColor: category_bg, color: text_color }}
          >
            {category}
          </span>
        </div>
        <h2 className="text-2xl font-semibold mt-2 text-[#0B0B0B]">{title}</h2>
        <h2 className="text-lg font-semibold " style={{ color: text_color }}>
          ${price}
        </h2>
        <Link to={`/donations/${id}`}>
          <button
            className="px-8 py-2 rounded-md text-white mt-4"
            style={{ background: text_color }}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

DonationListCard.propTypes = {
  donation: PropTypes.object,
};

export default DonationListCard;
