import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

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

  const data = [
    { name: "Group A", value: 12 },
    { name: "Group B", value: donate },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-3 pt-10 pb-20">
      <div className="w-full min-h-[70vh] flex flex-col justify-center items-center ">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>

        <div className="flex flex-col md:flex-row justify-center items-center">
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
