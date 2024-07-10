import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/homePage.css";
import "../styles/header.css";
import "../styles/footer.css";
import FadeInSection from "../components/FadeInSection";
import Loader from "../components/Loader"; // Assure-toi que ce composant existe
import blackLogoSrc from "../assets/biskeep.png";
import logoSrc from "../assets/BiskeepWhite.png";
import imgLanding from "../assets/landing.png";
import gozen from "../assets/gozen.webp";
import fnac from "../assets/fnac.png";
import adidas from "../assets/adidas2.png";
import intel from "../assets/intel.png";
import redbull from "../assets/redbull.png";
import sponsors from "../assets/sponsors.png";
import ending from "../assets/ending.png";
import teamsData from "../data/hackathonAdrien.json"; // Import des données JSON
import reviewProof from "/Group3.svg";

function scrollToElement(id) {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
}

export default function Home() {
	const [loading, setLoading] = useState(true);
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		const images = [
			blackLogoSrc,
			logoSrc,
			imgLanding,
			gozen,
			fnac,
			adidas,
			intel,
			redbull,
			sponsors,
		];

		let loadedImages = 0;

		images.forEach((src) => {
			const img = new Image();
			img.src = src;
			img.onload = () => {
				loadedImages++;
				if (loadedImages === images.length) {
					setLoading(false);
				}
			};
		});

		// Fetching teams data
		setTeams(teamsData);
	}, []);

	if (loading) {
		return <Loader />;
	}

	const article = teamsData["0"];
	return (
		<div>
			<div className="background-container">
				<div className="blur-circle"></div>
				<header className="header">
					<Link className="logo" to="/">
						<img src={blackLogoSrc} alt="Biskeep logo" />
					</Link>
					<ul className="onglet">
						<li>
							<a
								className="featureNav"
								href="#feature"
								onClick={() => scrollToElement("feature")}>
								Features
							</a>
						</li>
						<Link to="/auth/login" className="link">
							<li className="features">Connexion</li>
						</Link>
						<Link to="/auth/register" className="link">
							<p className="features try">S'inscrire</p>
						</Link>
					</ul>
				</header>
				<main>
					<FadeInSection>
						<section className="landing-page">
							<h1>
								<span className="spaced-word">Réinventez</span>
								<span className="gradient-text boulbi"> l'e-sport</span>
								<span className="spaced-word">avec</span>
								<br />
								<span className="gradient-text">l'inclusivité</span>
							</h1>
							<img className="imgLanding" src={imgLanding} alt="Landing" />
							<h2 className="landing-text-h2">
								Ouvrez la voie à une nouvelle ère de <br />
								compétition équitable.
							</h2>
							<Link to="/auth/register" className="tryBtnHome">
								<button className="features try">
									Commencez dès maintenant
								</button>
							</Link>
							<div className="reviewProofDiv">
								<p>
									<span>+300</span> équipes et participant(e)s
								</p>
								<img src={reviewProof} alt="" />
							</div>
						</section>
					</FadeInSection>
					<h2 className="actualite-esport">
						<span className="gradient-text ">Toute l'actualité e-sport</span>
					</h2>
					<section className="actu-section-homepage">
						<img className="actu-image" src={gozen} alt={article.title} />
						<h2 className="h2-homepage">{article.title}</h2>
						<p className="p-homepage">
							Retrouvez les dernières nouvelles et les événements en temps réel.
						</p>
					</section>
					<FadeInSection>
						<img src={sponsors} alt="Sponsors" />
					</FadeInSection>
					<section className="features-section">
						<div className="feature-card">
							<h3 className="feature-title" id="feature">
								Visualiser en temps réel vos équipes inclusives
							</h3>
							<p className="feature-text">
								Découvrez en temps réel la composition et les performances de
								vos équipes diversifiées grâce à notre tableau de bord
								interactif. Engagez-vous pour une transparence totale et
								favorisez l'égalité et la diversité dans votre communauté
								e-sportive.
							</p>
						</div>
						<div className="feature-card">
							<h3 className="feature-title">
								Optimisez la Performance avec Diversité
							</h3>
							<p className="feature-text">
								Apprenez comment la diversité peut transformer les performances
								et la créativité de vos équipes. Mettez en avant les avantages
								compétitifs d'un environnement inclusif.
							</p>
						</div>
						<div className="feature-card">
							<h3 className="feature-title">Connectivité sans Frontières</h3>
							<p className="feature-text">
								Facilitez la connexion entre joueurs de tous horizons grâce à
								notre plateforme. Favorisez des collaborations enrichissantes et
								créez une communauté e-sport mondiale et inclusive.
							</p>
						</div>
					</section>
					<section className="analysis-section">
						<h2 className="analysis-title">
							Une analyse de l'inclusivité chez les structures
						</h2>
						<div className="analysis-container">
							{teams.slice(0, 3).map((team) => (
								<div key={team.index} className="analysis-card">
									<img src={team.logo} alt={team.nom} className="team-logo" />
									<h3>{team.nom}</h3>
									<p>Indice d'inclusivité : {team.inclusivity_index}</p>
									<p>Popularité : {team.popularity}</p>
								</div>
							))}
						</div>
					</section>
					<FadeInSection>
						<section className="join-us-section">
							<div className="join-us-container">
								<div className="join-us-image-wrapper">
									<img src={ending} alt="Join us" className="join-us-image" />
									<Link to="/auth/register">
										<button className="features try join-us-button">
											Rejoignez-nous
										</button>
									</Link>
								</div>
							</div>
						</section>
					</FadeInSection>
				</main>
				<footer className="footer">
					<div className="img-socials-container">
						<Link to="/">
							<img
								className="footer-biskeep"
								src={logoSrc}
								alt="Retour à l'accueil"
							/>
						</Link>
						<div className="card">
							<a href="#" className="socialContainer containerOne">
								<svg className="socialSvg instagramSvg" viewBox="0 0 16 16">
									<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
								</svg>
							</a>

							<a href="#" className="socialContainer containerTwo">
								<svg className="socialSvg twitterSvg" viewBox="0 0 16 16">
									<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
								</svg>
							</a>

							<a href="#" className="socialContainer containerThree">
								<svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
									<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
								</svg>
							</a>
						</div>
					</div>
					<ul className="footer-structure">
						<li className="made-by">© Made by SKYRAM</li>
						<li>
							<ul className="footer-list">
								<li>
									<Link to="/auth/login" className="footer-element">
										Accueil
									</Link>
								</li>
								<li>
									<Link to="/auth/login" className="footer-element">
										Actualités
									</Link>
								</li>
								<li>
									<Link to="/auth/login" className="footer-element">
										Features
									</Link>
								</li>
								<li>
									<Link to="/auth/login" className="footer-connexion">
										Connexion
									</Link>
								</li>
							</ul>
						</li>
					</ul>
				</footer>
			</div>
		</div>
	);
}
