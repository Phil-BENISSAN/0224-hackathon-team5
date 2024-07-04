import teamsData from "../data/hackathonAdrien.json";
import "../styles/teamsRank.css";

export default function TeamsRank() {
	return (
		<section className="big-section">
			<div className="teamDivCss">
				{teamsData.map((team, index) => (
					<div key={index} className="teamDivMap">
						<img src={team.logo} alt={team.nom} className="teamImg" />
						<p>{team.nom}</p>
						<div>
							<p>Indice d'inclusivité : {team.inclusivity_index}</p>
							<p>Popularité : {team.popularity}</p>
							<p>Nationalité : {team.nationality}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
