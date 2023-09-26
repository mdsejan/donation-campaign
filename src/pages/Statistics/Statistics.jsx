import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const [donate, setDonate] = useState(0);

  useEffect(() => {
    const donates = JSON.parse(localStorage.getItem("donates"));

    if (donates) {
      const yDonation = donates.length;
      setDonate(yDonation);
    } else {
      setDonate(0);
    }
  }, []);

  const yourDonations = donate;
  const totalDonations = 12;

  const data = [
    { name: "Your Donations", value: yourDonations },
    { name: "Remaining", value: totalDonations - yourDonations },
  ];

  const COLORS = ["#00C49F", "#FF444A"];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="12"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-3 pt-10 pb-20">
      <div className="w-full min-h-[70vh] flex flex-col justify-center items-center ">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
              label={renderCustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="flex flex-col md:flex-row justify-center items-center pt-16">
          <div className="flex justify-center items-center md:mr-12">
            <p className="text-lg mr-4">Your Donation</p>
            <div className="w-16 h-3 rounded-sm bg-[#00C49F]"></div>
          </div>

          <div className="flex justify-center items-center">
            <p className="text-lg mr-4">Total Donation</p>
            <div className="w-16 h-3 rounded-sm bg-[#FF444A]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
