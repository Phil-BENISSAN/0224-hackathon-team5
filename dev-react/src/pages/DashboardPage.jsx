import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import logoSrc from "../assets/Biskeep.png";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoMdCalendar } from "react-icons/io";

function Dashboard() {
	return (
		<>
			<div className="sidebar">
				<div className="sidebar-logo">
					<img src={logoSrc} alt="Biskeep Logo" />
				</div>
				<nav className="sidebar-nav">
					<ul>
						<li>
							<Link to="/dashboard/actus" className="sidebar-link">
								<AiOutlineHome className="icons" />
								Accueil
							</Link>
						</li>
						<li>
							<Link to="/dashboard/teamsRank" className="sidebar-link">
								<AiOutlineTeam className="icons" /> Equipes
							</Link>
						</li>
						<li>
							<Link to="/dashboard/stats" className="sidebar-link">
								<IoStatsChartSharp className="icons" /> Statistiques
							</Link>
						</li>

						<li>
							<Link to="/dashboard/events" className="sidebar-link">
								<IoMdCalendar className="icons" /> Events
							</Link>
						</li>
						<li>
							<Link to="/dashboard/about" className="sidebar-link">
								<IoIosCall className="icons" /> A propos
							</Link>
						</li>
					</ul>
				</nav>
				<div className="sidebar-footer">
					<Link to="/logout" className="sidebar-link">
						<p></p>Se déconnecter
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
}

export default Dashboard;
