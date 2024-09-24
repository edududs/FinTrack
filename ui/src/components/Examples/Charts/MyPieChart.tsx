import React, { useState } from "react";
import { PieChart, Pie, Legend, ResponsiveContainer, Cell } from "recharts";
import { renderActiveShape } from "src/components/core/Chart/renders";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "src/components/core/Chart";

const data = [
  { name: "Group A", value: 400, color: "#0088FE" },
  { name: "Group B", value: 300, color: "#00C49F" },
  { name: "Group C", value: 300, color: "#FFBB28" },
  { name: "Group D", value: 200, color: "#FF8042" },
];

const MyPieChart: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ChartContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            fill="#8884d8"
            outerRadius={80}
            dataKey="value"
            onMouseEnter={onPieEnter}
            activeIndex={activeIndex}
            onMouseLeave={() => {
              setActiveIndex(-1);
            }}
            activeShape={renderActiveShape}
            className="mb-10"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend align="center" verticalAlign="bottom" height={36} />
        </PieChart>
      </ChartContainer>
    </ResponsiveContainer>
  );
};

export default MyPieChart;
