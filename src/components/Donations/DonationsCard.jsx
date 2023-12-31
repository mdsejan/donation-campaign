import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationsCard = ({ donation }) => {
  const { id, image, title, category, category_bg, card_bg, text_color } =
    donation || {};

  return (
    <Link to={`/donations/${id}`} state={title}>
      <div
        className="card h-full rounded-md "
        style={{ backgroundColor: card_bg }}
      >
        <figure>
          <img className="w-full h-52 object-cover" src={image} alt={title} />
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
  donation: PropTypes.object,
};

export default DonationsCard;
