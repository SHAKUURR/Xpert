import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { TotalProjects } from "../../lib/fakeData";

const ProjectStat = () => {
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
		<div className="w-full h-[12rem]">
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie
						data={TotalProjects}
						cx="50%"
						cy="50%"
						innerRadius={60}
						outerRadius={80}
						fill="#8884d8"
						paddingAngle={5}
						dataKey="count"
						nameKey="project"
						style={{ cursor: "pointer", outline: "none" }}
					>
						{TotalProjects.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={entry.color} />
						))}
					</Pie>
					<Tooltip content={renderTooltip} />
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ProjectStat;
