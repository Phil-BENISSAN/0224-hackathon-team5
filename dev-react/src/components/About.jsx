import "../styles/about.css";
import inclusivityData from "../data/aboutData.json";

function About() {
	return (
		<div className="big-container-about">
			{inclusivityData.map((chapter, index) => (
				<div key={index} className="chapter">
					<h2>{chapter.title}</h2>
					<p>{chapter.content}</p>
				</div>
			))}
		</div>
	);
}

export default About;
