import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { renderActiveShapeDonut } from "src/components/Chart/renders";

// Dados de exemplo para o gráfico de pizza
const dataPieChart = [
  { name: "Grupo A", value: 450, color: "#0088FE" },
  { name: "Grupo B", value: 150, color: "#00C49F" },
  { name: "Grupo C", value: 300, color: "#FFBB28" },
  { name: "Grupo D", value: 100, color: "#FF8042" },
  { name: "Grupo E", value: 250, color: "#24CBE5" },
];
const DonutChartDemo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1); // Usar -1 para inicialmente nenhum ativo

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={dataPieChart}
          cx="50%"
          cy="50%"
          labelLine={false}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          onMouseEnter={onPieEnter}
          onMouseLeave={() => {
            setActiveIndex(-1);
          }} // Remove o índice ativo quando o mouse sai do gráfico
          activeIndex={activeIndex}
          activeShape={renderActiveShapeDonut}
          dataKey="value"
        >
          {dataPieChart.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChartDemo;
