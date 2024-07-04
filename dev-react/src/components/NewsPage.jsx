import "../styles/newsPage.css";
import React from "react";
import data from "../../../data-fastapi/app/actu.json"; // Ajustez le chemin en fonction de la localisation de votre fichier JSON


export default function News() {
  return (
    <>
      <span className="main-newspage">
        <section className="big-section">
          {Object.values(data).map((item) => (
            <article key={item.id} className={item.id === 0 ? "articleMain" : "articleOthers"}>
              <img
                className={item.id === 0 ? "imgArticleMain" : "imgArticleOthers"}
                src={item.image}
                alt={item.title}
              />
              <div className={item.id === 0 ? "textContainerMain" : "textContainerOthers"}>
                <h2 className={item.id === 0 ? "h2ArticleMain" : "h2ArticleOthers"}>
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
            <video src="./src/assets/video.mp4" controls width="300"></video>
            <p>🌈 10 LGBTQ+ games to play this Pride Month!</p>
          </aside>
        </section>
      </span>
    </>
  );
}
