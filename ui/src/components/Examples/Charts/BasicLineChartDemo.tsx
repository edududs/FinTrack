import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "src/components/Chart";

interface BasicBarChartDemoProps {
  chartConfig?: any;
  chartData?: any;
}

const BasicLineChartDemo: React.FC<BasicBarChartDemoProps> = ({
  chartConfig,
  chartData,
}) => {
  return (
    <ChartContainer config={chartConfig} className="h-[200px] w-full">
      <LineChart accessibilityLayer data={chartData}>
        <CartesianGrid />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        {/* <YAxis axisLine={false} tickLine={false} tickMargin={10} /> */}
        <Line dataKey="desktop" stroke="var(--color-desktop)" type="natural" />
        <Line dataKey="mobile" stroke="var(--color-mobile)" type="bump" />
      </LineChart>
    </ChartContainer>
  );
};

export default BasicLineChartDemo;
