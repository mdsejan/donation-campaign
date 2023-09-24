import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import DonationsCard from "../../components/Donations/DonationsCard";

const Home = () => {
  const donations = useLoaderData();
  return (
    <div>
      <Header></Header>
      <div className="max-w-screen-2xl mx-auto px-3">
        <section className="grid grid-cols-4 gap-8 pt-20 pb-36">
          {donations.map((donation) => (
            <DonationsCard
              key={donation.id}
              donation={donation}
            ></DonationsCard>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
