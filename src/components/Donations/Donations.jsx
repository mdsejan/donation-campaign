import { useEffect, useState } from "react";
import DonationsCard from "./DonationsCard";

const Donations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("donations.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto px-3">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-20 pb-36">
        {donations.map((donation) => (
          <DonationsCard key={donation.id} donation={donation}></DonationsCard>
        ))}
      </section>
    </div>
  );
};

export default Donations;
