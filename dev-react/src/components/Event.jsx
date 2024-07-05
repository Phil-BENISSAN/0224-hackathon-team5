import "../styles/event.css";
import { useState } from "react";
import eventData from "../data/eventData.json";

const images = [
	"/photo-1600320844656-a311b0477df0.jpeg",
	"/photo-1540317580384-e5d43616b9aa.jpeg",
	"/photo-1600320844678-43cebba1cdfe.jpeg",
];

function getRandomImage() {
	const randomIndex = Math.floor(Math.random() * images.length);
	return images[randomIndex];
}

function Event() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedEvent, setSelectedEvent] = useState(null);
	const [selectedImage, setSelectedImage] = useState("");

	const handleOpenDiv = (event) => {
		setSelectedEvent(event);
		setSelectedImage(getRandomImage());
		setIsOpen(true);
	};

	const handleCloseDiv = () => {
		setIsOpen(false);
		setSelectedEvent(null);
		setSelectedImage("");
	};

	return (
		<div className="big-container">
			<div className="big-container-grid-boy">
				{eventData.map((event, index) => (
					<div
						key={index}
						className="eventsDiv"
						onClick={() => handleOpenDiv(event)}>
						<h1>{event.title}</h1>
						<div className="eventsDivLocDate">
							<p>{event.location}</p>
							<p>{event.date}</p>
							<p>{event.attendees}</p>
						</div>
					</div>
				))}
			</div>
			{isOpen && selectedEvent && (
				<div className="modal" onClick={handleCloseDiv}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<span className="close-button" onClick={handleCloseDiv}>
							&times;
						</span>
						<h2>{selectedEvent.title}</h2>
						<img
							src={selectedImage}
							alt={selectedEvent.title}
							className="eventImg"
						/>
						<div className="modalText">
							<p>Lieu : {selectedEvent.location}</p>
							<p>Date : {selectedEvent.date}</p>
							<p>Participants : {selectedEvent.attendees}</p>
						</div>
						<button className="modal-button" onClick={handleCloseDiv}>
							PARTICIPER
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Event;
