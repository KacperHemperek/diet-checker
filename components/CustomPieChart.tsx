import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

type Props = {
  name: string;
  demand: number;
  content?: number;
  color: string;
};

function CustomPieChart({ name, content, demand, color }: Props) {
  const data = [
    {
      id: "1",
      name: "L1",
      value: demand - (typeof content === "undefined" ? 0 : content),
    },
    { id: "2", name: "L2", value: content },
  ];

  return (
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
          paddingAngle={0}
          cornerRadius={5}
        >
          <Cell key="test" fill="#CCC" />
        </Pie>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="1.5rem"
        >
          {name}
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default CustomPieChart;
