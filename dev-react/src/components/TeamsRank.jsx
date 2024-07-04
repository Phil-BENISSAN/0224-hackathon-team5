import teamsData from "../data/hackathonAdrien.json";
import { useState } from "react";
import "../styles/teamsRank.css";

export default function TeamsRank() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenDiv = () => {
		setIsOpen(!isOpen);
	};

	return (
		<section className="big-section">
			<div className="teamDivCss">
				<h2>Equipes les plus inclusives</h2>
				{teamsData.map((team, index) => (
					<div key={index} className="teamDivMap" onClick={handleOpenDiv}>
						<img src={team.logo} alt={team.nom} className="teamImg" />
						<h3>{team.nom}</h3>
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
