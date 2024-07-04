import teamsData from "../data/teamsRank.json";
import "../styles/teamsRank.css";

export default function TeamsRank() {
	return (
		<>
			<h1>hi</h1>
			<h2>Top équipes inclusives</h2>
			<div className="teamDivCss">
				{teamsData.map((team, index) => (
					<div key={index} className="teamDivMap">
						<img src={team.img} alt={team.title} className="teamImg" />
						<p>{team.title}</p>
						<div>
							<p>Indice d'inclusivité : {team.inclusivity_index}</p>
							<p>Popularité : {team.popularity}</p>
							<p>Nationalité : {team.nationality}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
