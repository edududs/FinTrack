import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "src/components/core/Chart";

interface BasicBarChartDemoProps {
  chartConfig?: any;
  chartData?: any;
}

const BasicBarChartDemo: React.FC<BasicBarChartDemoProps> = ({
  chartConfig,
  chartData,
}) => {
  return (
    <ChartContainer config={chartConfig} className="h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={10} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={10} />
      </BarChart>
    </ChartContainer>
  );
};

export default BasicBarChartDemo;
