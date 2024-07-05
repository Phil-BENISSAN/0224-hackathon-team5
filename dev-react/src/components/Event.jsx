import "../styles/event.css";
import "../data/eventData.json";

function Event() {
	return (
    <div className="big-container">
        {eventData.map((index) => (
            <div></div>
        ))}
    </div>);
}

export default Event;
