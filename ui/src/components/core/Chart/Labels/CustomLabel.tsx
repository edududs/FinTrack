import { PieLabelRenderProps } from "recharts";

const data = [
  { name: "Group A", value: 400, color: "#0088FE" },
  { name: "Group B", value: 300, color: "#00C49F" },
  { name: "Group C", value: 300, color: "#FFBB28" },
  { name: "Group D", value: 200, color: "#FF8042" },
];

interface CustomLabelProps extends PieLabelRenderProps {
  hideLabel?: boolean;
  labelFormatter?: (value: string, percent: number) => string;
}

const CustomLabel = ({
  cx = 0,
  cy = 0,
  midAngle = 0,
  outerRadius = 0,
  percent = 0,
  index,
  name,
  hideLabel = false,
    labelFormatter,
    activeIndex,
  ...rest
}: CustomLabelProps) => {
  const RADIAN = Math.PI / 180;
  const radius = Number(outerRadius) + 23;
  const x = Number(cx) + radius * Math.cos(-midAngle * RADIAN);
    const y = Number(cy) + radius * Math.sin(-midAngle * RADIAN);
    const color = rest.color || "black";
    console.log("activeIndex", activeIndex);


  const formattedValue = (percent * 100).toFixed(0);
  const labelContent = labelFormatter
    ? labelFormatter(name || "", percent)
    : `${name}: ${formattedValue}%`;

  if (hideLabel) {
    return null;
  }
  return (
    <text
      x={x}
      y={y}
      fill={color || "black"}
      textAnchor={x > Number(cx) ? "start" : "end"}
      dominantBaseline="central"
      className="text-xs transition-transform"
    >
      {labelContent}
    </text>
  );
};

export default CustomLabel;
