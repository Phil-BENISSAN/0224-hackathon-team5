import React from "react";
import { Link } from "react-router-dom";
import "../styles/homePage.css";
import imgLanding from "../assets/landing.png";
import SwiperComponent from "../components/SwiperComponent.jsx";

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
        <Link>
          <button className="features try">Essayer gratuitement</button>
        </Link>
      </section>
      <SwiperComponent />
      <div className="card1">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Visualiser en temps réel vos équipes inclusives</h2>
            <p>
              Explorez l'univers de l'e-sport avec une transparence totale grâce
              à notre tableau de bord interactif. Visualisez en temps réel la
              composition et les performances de vos équipes inclusives, et
              engagez-vous activement dans la promotion de la diversité et de
              l'équité au sein de votre communauté sportive.
            </p>
          </div>
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/LGD_Gaming_at_the_2015_LPL_Summer_Finals.jpg"
              alt="Album"
            />
          </figure>
        </div>
      </div>
      <img className="bigImg" src="https://static.owayo-cdn.com/newhp/img/magazin/jeuxesportpopulaires/jeux-esport-populaires-monde-entier-670px.jpg" alt="" />
    </main>
  );
}
