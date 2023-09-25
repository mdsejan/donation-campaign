import PropTypes from "prop-types";
const DonationDetailsCard = ({ donation }) => {
  const { title, description, price, text_color } = donation || {};
  return (
    <div>
      <div
        className="min-h-[18rem] md:min-h-[30rem] lg:min-h-[50rem] bg-no-repeat bg-cover bg-center flex items-end"
        style={{
          backgroundImage: "url(https://i.ibb.co/GVhYnrh/Education.png)",
        }}
      >
        <div className="w-full h-24 flex items-center p-9 bg-[#0B0B0B80]">
          <button
            className="btn text-white capitalize border-0"
            style={{ backgroundColor: text_color }}
          >
            Donate $ {price}
          </button>
        </div>
      </div>

      <div className="pt-12 pb-20">
        <h1 className="text-2xl lg:text-4xl font-bold mb-8">{title}</h1>
        <h1 className="text-justify"> {description} </h1>
      </div>
    </div>
  );
};

DonationDetailsCard.propTypes = {
  donation: PropTypes.string,
};

export default DonationDetailsCard;
