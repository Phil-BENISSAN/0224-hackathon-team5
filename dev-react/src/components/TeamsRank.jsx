import teamsData from "../data/hackathonAdrien.json";
import { useState } from "react";
import "../styles/teamsRank.css";

export default function TeamsRank() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedTeam, setSelectedTeam] = useState(null);

	const handleOpenDiv = (team) => {
		setSelectedTeam(team);
		setIsOpen(true);
	};

	const handleCloseDiv = () => {
		setIsOpen(false);
		setSelectedTeam(null);
	};

	return (
		<section className="big-section">
			<div className="teamDivCss">
				<h2>Equipes les plus inclusives</h2>
				{teamsData.map((team, index) => (
					<div
						key={index}
						className="teamDivMap"
						onClick={() => handleOpenDiv(team)}>
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
			{isOpen && selectedTeam && (
				<div className="modal" onClick={handleCloseDiv}>
					<div className="modal-content">
						<div className="modalTeamImg">
							<h2>{selectedTeam.nom}</h2>
							<img
								src={selectedTeam.logo}
								alt={selectedTeam.nom}
								className="teamImg"
							/>
						</div>
						<div className="modalText">
							<p>Indice d'inclusivité : {selectedTeam.inclusivity_index}</p>
							<p>Popularité : {selectedTeam.popularity}</p>
							<p>Nationalité : {selectedTeam.nationality}</p>
							<p>{selectedTeam.description}</p>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
