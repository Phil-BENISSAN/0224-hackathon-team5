import "../styles/event.css";
import eventData from "../data/eventData.json";

function Event() {
	return (
		<div className="big-container">
			<div className="big-container-grid-boy">
				{eventData.map((event, index) => (
					<div key={index} className="eventsDiv">
						<h1>{event.title}</h1>
						<div className="eventsDivLocDate">
							<p>{event.location}</p>
							<p>{event.date}</p>
							<p>{event.attendees}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Event;
