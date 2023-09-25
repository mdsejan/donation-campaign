import PropTypes from "prop-types";

const DonationListCard = ({ donation }) => {
  console.log(typeof donation);
  const { title, category, category_bg, card_bg, text_color } = donation || {};
  return (
    <div
      className="card h-full rounded-md grid grid-cols-1  md:grid-cols-3"
      style={{ backgroundColor: card_bg }}
    >
      <div className="">
        <figure>
          <img
            className="w-full h-52 object-cover"
            src="https://i.ibb.co/Y3QNw7G/Food.png"
            alt="Shoes"
          />
        </figure>
      </div>
      <div className="card-body md:col-span-2">
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
  );
};

DonationListCard.propTypes = {
  donation: PropTypes.object,
};

export default DonationListCard;
