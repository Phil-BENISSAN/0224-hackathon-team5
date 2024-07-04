import teamsData from "../data/teamsRank.json";

export default function TeamsRank() {
	console.log(teamsData);
	return (
		<>
			{/* Début : Dashboard : Barre de gauche */}
			<h1>hi</h1>
			{/* Fin : Dashboard : Barre de gauche */}

			{/* Début élément central de la page */}
			<h2>Top équipes inclusives</h2>
			<div className="team">
				{teamsData.map((team, index) => (
					<div key={index}>
						<p>{team.title}</p>
						<div>
							<p>Indice d'inclusivité : {team.inclusivity_index}</p>
							<p>Popularité : {team.popularity}</p>
							<p>Nationalité : {team.nationality}</p>
						</div>
					</div>
				))}
			</div>

			{/* Fin élément central de la page */}
		</>
	);
}
