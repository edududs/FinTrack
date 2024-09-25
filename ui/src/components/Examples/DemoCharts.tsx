import {
  ChartContainer,
  type ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  Separator,
} from "../core";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";
import MyPieChart from "./Charts/MyPieChart";
import DonutChartDemo from "./Charts/DonutChartDemo";
import BasicBarChartDemo from "./Charts/BasicBarChartDemo";
import { Label } from "../core/Label";
import BasicLineChartDemo from "./Charts/BasicLineChartDemo";

export const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const LineIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    style={{
      display: "inline-block",
      verticalAlign: "middle",
      marginRight: "4px",
    }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0,16h10.666666666666666 A5.333333333333333,5.333333333333333,0,1,1,21.333333333333332,16 H32M21.333333333333332,16 A5.333333333333333,5.333333333333333,0,1,1,10.666666666666666,16"
      stroke="hsl(var(--chart-2))"
      strokeWidth="4"
    />
  </svg>
);

export const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const chartConfigWithIcons = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
    icon: LineIcon,
  },
} satisfies ChartConfig;

const ComposedLineBarChart: React.FC = () => {
  return (
    <ChartContainer config={chartConfigWithIcons} className="h-[200px] w-full">
      <ComposedChart accessibilityLayer data={chartData}>
        <CartesianGrid />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis axisLine={false} tickLine={false} tickMargin={10} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" />
        <Line dataKey="mobile" stroke="var(--color-mobile)" type="natural" />
      </ComposedChart>
    </ChartContainer>
  );
};

const DemoCharts: React.FC = () => {
  return (
    <div className="mt-10 gap-4">
      <Label className="text-xl justify-center flex mb-3">
        Gráfico de Barras
      </Label>
      <BasicBarChartDemo chartConfig={chartConfig} chartData={chartData} />

      <Separator className="mt-7 mb-7" />

      <Label className="text-xl justify-center flex mb-3">
        Gráfico de Linhas
      </Label>
      <BasicLineChartDemo chartConfig={chartConfig} chartData={chartData} />

      <Separator className="mt-7 mb-7" />

      <Label className="text-xl justify-center flex mb-3">
        Gráfico Composto
      </Label>
      <ComposedLineBarChart />

      <Separator className="mt-7 mb-7" />

      <Label className="text-xl justify-center flex mb-3">
        Gráfico de Pizza
      </Label>
      <MyPieChart />

      <Separator className="mt-7 mb-7" />

      <Label className="text-xl justify-center flex mb-3">
        Gráfico de Donut
      </Label>
      <DonutChartDemo />
    </div>
  );
};

export default DemoCharts;
