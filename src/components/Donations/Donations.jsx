import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import DonationsCard from "./DonationsCard";

const Donations = ({ query }) => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("donations.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  const filterDonation = donations.filter(
    (donate) => donate.category === query
  );

  return (
    <div className="max-w-screen-2xl mx-auto px-3">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-20 pb-36">
        {filterDonation.length !== 0
          ? filterDonation.map((donation) => (
              <DonationsCard
                key={donation.id}
                donation={donation}
              ></DonationsCard>
            ))
          : donations.map((donation) => (
              <DonationsCard
                key={donation.id}
                donation={donation}
              ></DonationsCard>
            ))}
      </section>
    </div>
  );
};

Donations.propTypes = {
  query: PropTypes.string,
};
export default Donations;
