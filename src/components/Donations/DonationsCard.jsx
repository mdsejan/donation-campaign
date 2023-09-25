import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationsCard = ({ donation }) => {
  const { title, category, category_bg, card_bg, text_color } = donation || {};

  return (
    <Link to="/donations/1">
      <div
        className="card h-full rounded-md "
        style={{ backgroundColor: card_bg }}
      >
        <figure>
          <img
            className="w-full h-52 object-cover"
            src="https://i.ibb.co/Y3QNw7G/Food.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div>
            <span
              className="px-2 py-1 rounded-sm"
              style={{ backgroundColor: category_bg, color: text_color }}
            >
              {category}
            </span>
          </div>
          <h2 className="card-title mt-2" style={{ color: text_color }}>
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

DonationsCard.propTypes = {
  donation: PropTypes.string,
};

export default DonationsCard;
