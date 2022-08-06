import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

function CustomPieChart() {
  const data = [
    { id: "1", name: "L1", value: 75 },
    { id: "2", name: "L2", value: 25 },
  ];

  return (
    <ResponsiveContainer>
      <PieChart width={50} height={50}>
        <Pie
          data={data}
          dataKey="value"
          innerRadius="80%"
          outerRadius="100%"
          fill="#82ca9d"
          startAngle={90}
          endAngle={-270}
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
          fontSize="2rem"
        >
          25
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default CustomPieChart;
