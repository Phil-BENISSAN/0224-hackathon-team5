import React from "react";
import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";

const data = [
	{ name: "Group A", value: 400 },
	{ name: "Group B", value: 300 },
	{ name: "Group C", value: 300 },
	{ name: "Group D", value: 200 },
];

const PieChartComponent = () => {
	return (
		<div style={{ width: "100%", height: 800 }}>
			<ResponsiveContainer>
				<PieChart>
					<Pie dataKey="value" data={data} fill="#8884d8" label />
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
};

export default PieChartComponent;
