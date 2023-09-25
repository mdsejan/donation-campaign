import { useEffect, useState } from "react";
import DonationListCard from "./DonationListCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);

  const [noFound, setNoFound] = useState(false);

  useEffect(() => {
    const donates = JSON.parse(localStorage.getItem("donates"));

    if (donates) {
      setDonations(donates);
    } else {
      setNoFound("No donations found.");
    }
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-3 pt-10 pb-20">
      {noFound ? (
        <h3 className="w-full min-h-[60vh] lg:min-h-[80vh] flex justify-center items-center text-2xl md:text-5xl font-bold">
          {noFound}
        </h3>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-0 md:px-16 lg:px-0">
          {donations.map((donation) => (
            <DonationListCard
              key={donation.id}
              donation={donation}
            ></DonationListCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Donation;
