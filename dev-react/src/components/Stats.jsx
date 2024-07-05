import "../styles/stats.css";
import teamData from "../data/dataChart.json";
import { useState } from "react";
import {
	ResponsiveContainer,
	PieChart as RechartsPieChart,
	Pie,
	Cell,
	Tooltip,
} from "recharts";

const data1 = [
	{ name: "Homme", value: 77 },
	{ name: "Femme", value: 33 },
];

const data2 = [
	{ name: "Homme", value: 82 },
	{ name: "Femme", value: 18 },
];

const data3 = [
	{ name: "Homme", value: 80 },
	{ name: "Femme", value: 20 },
];

const data4 = [
	{ name: "Homme", value: 98 },
	{ name: "Femme", value: 2 },
];

const data5 = [
	{ name: "Homme", value: 80 },
	{ name: "Femme", value: 20 },
];

const data6 = [
	{ name: "Homme", value: 72 },
	{ name: "Femme", value: 28 },
];

const data7 = [
	{ name: "Homme", value: 87 },
	{ name: "Femme", value: 13 },
];

const data8 = [
	{ name: "Homme", value: 84 },
	{ name: "Femme", value: 16 },
];

const dataSets = [data1, data2, data3, data4, data5, data6, data7, data8];
const COLORS = ["#0000FF", "#FF0000"];

export default function Stats() {
	const [currentData, setCurrentData] = useState(data1);
	const [selectedIndex, setSelectedIndex] = useState(null);

	const handleImageClick = (index) => {
		setCurrentData(dataSets[index]);
		setSelectedIndex(index);
	};

	const totalHomme =
		currentData.find((item) => item.name === "Homme")?.value || 0;
	const totalFemme =
		currentData.find((item) => item.name === "Femme")?.value || 0;
	const total = totalHomme + totalFemme;
	const parite = total ? ((totalFemme / total) * 100).toFixed(2) : 0;

	return (
		<main>
			<section className="big-section-stats">
				<div className="statsGrid">
					<div className="statsGridTeam">
						{teamData.map((team, index) => (
							<div
								key={index}
								className={`statsGridMapImg ${
									selectedIndex === index ? "selected" : ""
								}`}
								onClick={() => handleImageClick(index)}>
								<img src={team.logo} alt="statsGridMapImgFull" />
							</div>
						))}
					</div>
					<div className="statsGridTop1">
						<p>Homme</p>
						<p>{totalHomme}%</p>
					</div>
					<div className="statsGridTop2">
						<p>Femme</p>
						<p>{totalFemme}%</p>
					</div>
					<div className="statsGridTop3">
						<p>Parité</p>
						<p>{parite}%</p>
					</div>
					<div className="statsGridGraph">
						<div style={{ width: "100%", height: 780 }}>
							<ResponsiveContainer>
								<RechartsPieChart>
									<Pie
										data={currentData}
										cx="50%"
										cy="50%"
										label
										labelLine={false}
										outerRadius={300}
										fill="#8884d8"
										className="piePie"
										dataKey="value">
										{currentData.map((entry, index) => (
											<Cell
												key={`cell-${index}`}
												fill={COLORS[index % COLORS.length]}
											/>
										))}
									</Pie>
									<Tooltip />
								</RechartsPieChart>
							</ResponsiveContainer>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
