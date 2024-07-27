import React from "react";
import {
	ResponsiveContainer,
	AreaChart,
	CartesianGrid,
	YAxis,
	XAxis,
	Tooltip,
	Area,
} from "recharts";
import { WorkReportData } from "../../lib/fakeData";

// Custom XAxis tick component
const CustomXAxisTick = (props) => {
	const { x, y, payload } = props;
	return (
		<g transform={`translate(${x},${y})`}>
			<text
				x={0}
				y={0}
				dy={60}
				textAnchor="middle"
				className="font-[600] dark:text-white text-[10px] md:text-[14px]"
			>
				{payload.value}
			</text>
		</g>
	);
};

// Custom YAxis tick component
const CustomYAxisTick = (props) => {
	const { x, y, payload } = props;
	return (
		<g transform={`translate(${x},${y})`}>
			<text
				x={-20} // Adding some padding to the left
				y={0}
				dy={-5}
				textAnchor="end"
				className="font-[600] dark:text-white text-[10px] md:text-[14px]"
			>
				{payload.value}
			</text>
		</g>
	);
};

// Custom Tooltip component
const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		const date = label + ", 2023";
		const data = payload[0].payload;

		return (
			<div className="bg-white rounded-lg dark:bg-[#0D0D0D] shadow-lg text-sm w-[192px] h-[136.29px]">
				<p className="font-[400] text-[12px] md:text-[14px] text-[#8A8A8A] bg-[#F5F5F5] dark:bg-[#171717] mx-1 my-2 rounded-t-lg p-2">
					{date}
				</p>
				<div className="my-2 px-3">
					<p className="text-gray-600">
						<span className="inline-block w-2 h-2 rounded-full bg-[#8917FC] mr-2"></span>
						<span className="text-[#8A8A8A]">Performance:</span>{" "}
						<span className="text-black font-[600] ml-1 dark:text-[#8A8A8A]">
							{data.performance}
						</span>
					</p>
					<p className="text-gray-600 mt-2">
						<span className="inline-block w-2 h-2 rounded-full bg-[#E0A100] mr-2"></span>
						<span className="text-[#8A8A8A]">Project:</span>{" "}
						<span className="text-black font-[600] ml-1 dark:text-[#8A8A8A]">
							{data.Project}
						</span>
					</p>
				</div>
			</div>
		);
	}

	return null;
};

const WorkReportStat = () => {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<AreaChart
				data={WorkReportData}
				margin={{ top: 30, right: 0, left: 0, bottom: 90 }}
			>
				<defs>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#8917FC" stopOpacity={0.08} />
						<stop offset="100%" stopColor="#FF8042" stopOpacity={0} />
					</linearGradient>
				</defs>
				<XAxis
					dataKey="name"
					padding={{ left: 30 }}
					stroke="0"
					tick={<CustomXAxisTick />}
				/>
				<YAxis
					stroke="0"
					tick={<CustomYAxisTick />}
					domain={[0, 60]} // Ensure Y-axis ranges from 0 to 60
					ticks={[0, 10, 20, 30, 40, 50, 60]} // Custom Y-axis ticks
				/>
				<CartesianGrid stroke="#E5E6EB" strokeWidth={1} vertical={false} />
				<Tooltip content={<CustomTooltip />} />
				<Area
					type="monotone"
					dataKey="performance"
					stroke="#8917FC"
					fillOpacity={1}
					fill="url(#colorUv)"
				/>
				<Area
					type="monotone"
					dataKey="Project"
					stroke="#E0A100"
					fillOpacity={0}
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default WorkReportStat;
