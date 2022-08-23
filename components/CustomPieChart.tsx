import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

type Props = {
  name: string;
  demand: number;
  content: number | undefined;
  color: string;
};

function CustomPieChart({ name, content, demand, color }: Props) {
  const data = [
    {
      id: "1",
      name: "L1",
      value: Math.max(
        demand - (typeof content === "undefined" ? 0 : content),
        0
      ),
    },
    {
      id: "2",
      name: "L2",
      value: Math.min(demand, typeof content === "undefined" ? 0 : content),
    },
  ];

  return (
    <>
      <ResponsiveContainer>
        <PieChart width={50} height={50}>
          <Pie
            data={data}
            dataKey="value"
            innerRadius="80%"
            outerRadius="100%"
            fill={color}
            startAngle={-270}
            endAngle={90}
            paddingAngle={2}
            cornerRadius={5}
          >
            <Cell key="test" strokeWidth={0.5} fill="#e5e7eb" />
          </Pie>
          <text
            x="50%"
            y="52%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="1.7rem"
          >
            {content}
          </text>
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-1 text-center">{name}</div>
    </>
  );
}

export default CustomPieChart;
