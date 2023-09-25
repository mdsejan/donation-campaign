import { useEffect, useState } from "react";
import DonationListCard from "./DonationListCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);

  const [noFound, setNoFound] = useState(false);

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donates = JSON.parse(localStorage.getItem("donates"));

    if (donates) {
      setDonations(donates);
    } else {
      setNoFound("No donations found.");
    }
  }, []);

  console.log(isShow);

  return (
    <div className="max-w-screen-2xl mx-auto px-3 pt-10 pb-20">
      {noFound ? (
        <h3 className="w-full min-h-[60vh] lg:min-h-[80vh] flex justify-center items-center text-2xl md:text-5xl font-bold">
          {noFound}
        </h3>
      ) : (
        <>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 px-0 md:px-16 lg:px-32 xl:px-0">
            {isShow
              ? donations.map((donation) => (
                  <DonationListCard
                    key={donation.id}
                    donation={donation}
                  ></DonationListCard>
                ))
              : donations
                  .slice(0, 4)
                  .map((donation) => (
                    <DonationListCard
                      key={donation.id}
                      donation={donation}
                    ></DonationListCard>
                  ))}
          </div>
          <div className="text-center py-12">
            {donations.length > 4 && (
              <button
                onClick={() => setIsShow(!isShow)}
                className="px-8 py-2 rounded-md bg-[#009444] hover:bg-black text-white capitalize"
              >
                {!isShow ? "See All" : "See Less"}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Donation;
