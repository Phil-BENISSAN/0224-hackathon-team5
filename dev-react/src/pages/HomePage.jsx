import React from "react";
import { Link } from "react-router-dom";
import "../styles/homePage.css";
import imgLanding from "../assets/landing.png";

export default function Home() {
	return (
		<main>
			<section className="landing-page">
				<h1>
					<span className="spaced-word">Réinventez</span>
					<span className="gradient-text"> l'e-sport</span>
					<span className="spaced-word">avec</span>
					<br />
					<span className="gradient-text">l'inclusivité</span>
				</h1>
				<img className="imgLanding" src={imgLanding} alt="" />
				<h2 className="landing-text-h2">
					Ouvrez la voie à une nouvelle ère de <br />
					compétition équitable.
				</h2>
				<Link to="/auth/register" className="link">
					<button className="try">Essayer gratuitement</button>
				</Link>
			</section>
		</main>
	);
}
