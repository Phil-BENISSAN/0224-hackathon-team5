import "../styles/newsPage.css";
import React from "react";
import data from "../data/actu.json";
import teamsAside from "../data/hackathonAdrien.json";
import gozen from "../assets/gozen.webp";

export default function News() {
  return (
    <>
      <span className="main-newspage">
        <section className="big-section">
        {Object.values(data).slice(1, 10).map((item) => (
            <article
              key={item.id}
              className={item.id === 0 ? "articleMain" : "articleOthers"}
            >
              <div
                className={
                  item.id === 0 ? "textContainerMain" : "textContainerOthers"
                }
              >
                <img
                  className={
                    item.id === 0 ? "imgArticleMain" : "imgArticleOthers"
                  }
                  src={item.image}
                  alt={item.title}
                />

                <h2
                  className={
                    item.id === 0 ? "h2ArticleMain" : "h2ArticleOthers"
                  }
                >
                  {item.title}
                </h2>
                <p className={item.id === 0 ? "" : "pArticleOthers"}>
                  {item.id === 0 ? item.description : item.sub_description}
                </p>
              </div>
            </article>
          ))}
        </section>
        <section>
          <aside className="aside">
            <video src="./src/assets/video.mp4" controls width="300"></video>
            <p>🌈 10 LGBTQ+ games to play this Pride Month!</p>
          </aside>
          <aside className="aside">
            <h2>Top 10 Teams</h2>
            {teamsAside.slice(0, 10).map((team) => (
              <div key={team.index} className="team-info">
                <img
                  className="team-logo"
                  src={team.logo}
                  alt={team.nom}
                  width="50"
                  height="50"
                />
                <div className="text-container">
                  <h3>{team.nom}</h3>
                  {/* <p>Inclusivity Index: {team.inclusivity_index}</p>
               <p>Popularity: {team.popularity}</p> */}
                </div>
              </div>
            ))}
          </aside>
        </section>
      </span>
    </>
  );
}
