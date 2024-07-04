import "../styles/stats.css";
import teamDataFull from "../data/hackathonAdrien.json";
import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";

const data = [
	{ name: "Group A", value: 400 },
	{ name: "Group B", value: 300 },
	{ name: "Group C", value: 300 },
	{ name: "Group D", value: 200 },
];

export default function Stats() {
	const teamData = teamDataFull.splice(0, 8);
	console.log(teamData);

	return (
		<main>
			<section className="big-section-stats">
				<div className="statsGrid">
					<div className="statsGridTeam">
						{teamData.map((team, index) => (
							<div key={index} className="statsGridMapImg">
								<img src={team.logo} alt="statsGridMapImgFull" />
							</div>
						))}
					</div>
					<div className="statsGridTop1">2</div>
					<div className="statsGridTop2">3</div>
					<div className="statsGridTop3">4</div>
					<div className="statsGridGraph">
						{" "}
						<div style={{ width: "100%", height: 780 }}>
							<ResponsiveContainer>
								<PieChart>
									<Pie dataKey="value" data={data} fill="#8884d8" label />
								</PieChart>
							</ResponsiveContainer>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
