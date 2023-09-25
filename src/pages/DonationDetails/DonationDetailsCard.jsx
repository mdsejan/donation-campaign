import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationDetailsCard = ({ donation }) => {
  const { id, image, title, description, price, text_color } = donation || {};

  const handleDonate = () => {
    const addedDonateArr = [];

    const donates = JSON.parse(localStorage.getItem("donates"));

    if (!donates) {
      addedDonateArr.push(donation);
      localStorage.setItem("donates", JSON.stringify(addedDonateArr));
      toast.success("Success! You've made a difference with your donation.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const isExits = donates.find((donate) => donate.id == id);

      if (!isExits) {
        addedDonateArr.push(...donates, donation);
        localStorage.setItem("donates", JSON.stringify(addedDonateArr));
        toast.success("Success! You've made a difference with your donation.", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("already donated. Thank you for your support!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };
  return (
    <div>
      <div
        className="min-h-[18rem] md:min-h-[30rem] lg:min-h-[50rem] bg-no-repeat bg-cover bg-center flex items-end"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="w-full h-24 flex items-center p-9 bg-[#0B0B0B80]">
          <button
            onClick={handleDonate}
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
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

DonationDetailsCard.propTypes = {
  donation: PropTypes.string,
};

export default DonationDetailsCard;
