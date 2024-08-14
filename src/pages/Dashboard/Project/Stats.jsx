import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
	Tooltip,
	Label,
} from "recharts";
import { TotalProjects } from "../../../lib/fakeData";

const Stats = () => {
	const renderTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			const { name, value } = payload[0];
			return (
				<div className="bg-white p-2 border border-gray-200 rounded shadow-lg">
					<p className="text-sm font-semibold">{name}</p>
					<p className="text-xs text-gray-600">Count: {value}</p>
				</div>
			);
		}
		return null;
	};

	return (
		<div className="w-full h-[8.5rem]">
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie
						data={TotalProjects}
						cx="50%"
						cy="50%"
						innerRadius={50}
						outerRadius={65}
						fill="#8884d8"
						paddingAngle={5}
						dataKey="count"
						nameKey="project"
						style={{ cursor: "pointer", outline: "none" }}
					>
						{TotalProjects.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={entry.color} />
						))}
						<Label
							value="163"
							position="center"
							className="text-xl font-bold text-[#1B0532] dark:text-white"
							style={{ fill: "currentColor" }}
						/>
						<Label
							value="Project"
							position="center"
							dy={20} // adjust vertical position
							className="text-sm"
						/>
					</Pie>
					<Tooltip content={renderTooltip} />
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Stats;
