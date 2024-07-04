import "../styles/newsPage.css";

export default function News() {
  return (
    <>
      <span className="main-newspage">
        <section className="big-section">
          <article className="articleMain">
            <img
              className="imgArticleMain"
              src="./src/assets/1280x720_Apex-Legends.jpg"
              alt="cool"
            />
            <div className="textContainerMain">
              <h2 className="h2ArticleMain">
                League of Legends : Riot Games prend une mesure radicale contre
                le harcèlement
              </h2>
              <p>
                Depuis de nombreux mois, voire de nombreuses années, le problème
                du harcèlement en ligne est devenu un sujet important dans la
                sphère vidéoludique. En effet, des jeux massivement multijoueur
                comme League of Legends sont des plateformes accessibles qui
                font la place à de nombreux comportements toxiques, auxquels
                Riot Games veut mettre un terme. C’est pourquoi, le studio a
                décidé de désactiver le chat général du jeu, baptisé /all pour
                les connaisseurs. Celui-ci était accessible par tous les joueurs
                d’une partie avant que celle-ci ne commence. Pour le moment
                cette décision semble être temporaire, comme expliqué par Andrei
                van Roon, le directeur de League of Legends. Dans un post, il
                déclare : « Alors que le chat /all peut être la source d’une
                interaction sociale amusante entre les équipes, […] les
                interactions négatives l’emportent actuellement sur les
                positives. Nous évaluerons l’impact de ce changement par le
                biais des rapports d’abus verbaux et des taux de pénalité, ainsi
                que par des enquêtes et des retours directs de votre part ».
              </p>
            </div>
          </article>
          <article className="articleOthers">
            <img
              className="imgArticleOthers"
              src="./src/assets/jeremy-lecerf-myopathe-gaming-a-change-ma-vie-35939.jpg"
              alt="66"
            />
            <div className="textContainerOthers">
              <h2 className="h2ArticleOthers">
                Jérémy Lecerf, myopathe : "Le gaming a changé ma vie"
              </h2>
              <p className="pArticleOthers">
                {" "}
                « J'avais des choses à célébrer ce week-end. J'ai reçu mon
                premier bulletin de salaire depuis bien longtemps et fêté mon
                déplacement à Londres », écrit Jérémy Lecerf sur son compte
                Facebook, le 9 octobre 2023.{" "}
              </p>
            </div>
          </article>
          <article className="articleOthers">
            <img
              className="imgArticleOthers"
              src="./src/assets/jeremy-lecerf-myopathe-gaming-a-change-ma-vie-35939.jpg"
              alt="66"
            />
            <div className="textContainerOthers">
              <h2 className="h2ArticleOthers">
                Jérémy Lecerf, myopathe : "Le gaming a changé ma vie"
              </h2>
              <p className="pArticleOthers">
                {" "}
                « J'avais des choses à célébrer ce week-end. J'ai reçu mon
                premier bulletin de salaire depuis bien longtemps et fêté mon
                déplacement à Londres », écrit Jérémy Lecerf sur son compte
                Facebook, le 9 octobre 2023.{" "}
              </p>
            </div>
          </article>
          <article className="articleOthers">
            <img
              className="imgArticleOthers"
              src="./src/assets/jeremy-lecerf-myopathe-gaming-a-change-ma-vie-35939.jpg"
              alt="66"
            />
            <div className="textContainerOthers">
              <h2 className="h2ArticleOthers">
                Jérémy Lecerf, myopathe : "Le gaming a changé ma vie"
              </h2>
              <p className="pArticleOthers">
                {" "}
                « J'avais des choses à célébrer ce week-end. J'ai reçu mon
                premier bulletin de salaire depuis bien longtemps et fêté mon
                déplacement à Londres », écrit Jérémy Lecerf sur son compte
                Facebook, le 9 octobre 2023.{" "}
              </p>
            </div>
          </article>
        </section>
        <aside className="aside">
          <video src="./src/assets/video.mp4" controls width="300"></video>
          <p>🌈 10 LGBTQ+ games to play this Pride Month!</p>
        </aside>
      </span>
    </>
  );
}
