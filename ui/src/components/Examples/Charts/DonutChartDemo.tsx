import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
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

  const renderActiveShape = (props: any) => {
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      percent,
      value,
    } = props;
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          fill={fill}
          style={{ fontWeight: "bold", textAlign: "center" }}
          className="drop-shadow-custom" // Adiciona o índice ativo quando o mouse entra no gráfico
        >
          {props.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          className="drop-shadow-custom"
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
          className="drop-shadow-custom"
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
          className="drop-shadow-custom"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
          style={{ fontWeight: "bold" }}
          className="drop-shadow-custom"
        >
          {`PV ${value}`}
        </text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey + 15}
          textAnchor={textAnchor}
          fill="#999"
          className="drop-shadow-custom"
        >
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
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
          activeShape={renderActiveShape}
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
