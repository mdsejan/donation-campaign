import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "./DonationDetailsCard";
import { useEffect, useState } from "react";

const DonationDetails = () => {
  const [donation, setDonation] = useState([]);
  const params = useParams();
  const { id } = params;
  console.log(id);

  const donations = useLoaderData();

  useEffect(() => {
    const findDonation = donations.find((donation) => donation.id == id);
    setDonation(findDonation);
  }, [id, donations]);

  return (
    <div className="max-w-screen-2xl mx-auto px-3 pt-10 pb-20">
      <DonationDetailsCard donation={donation}></DonationDetailsCard>
    </div>
  );
};

export default DonationDetails;
