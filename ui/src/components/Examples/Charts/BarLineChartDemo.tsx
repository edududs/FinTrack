import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { chartConfig, chartData } from "../DemoCharts";

export const BarLineChartDemo = () => {
    return (
        <div style={{ width: "100%", height: 300 }}>
            {/* Assegura que o ResponsiveContainer tenha altura */}
            <ResponsiveContainer>
                <ComposedChart data={chartData}>
                    <CartesianGrid />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="desktop"
                        fill={chartConfig.desktop.color}
                        name="Desktop"
                    />
                    <Line
                        type="monotone"
                        dataKey="mobile"
                        stroke={chartConfig.mobile.color}
                        name="Mobile"
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
}