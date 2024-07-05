import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import logoSrc from "../assets/biskeep.png";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoMdCalendar } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

function Dashboard() {
	return (
		<>
			<div className="sidebar">
				<div className="sidebar-logo">
					<h1>Biskeep</h1>
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
					<Link to="/" className="sidebar-link">
						<CiLogout className="icons" />
						<p className="paragraphSidebar">Se déconnecter</p>
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
}

export default Dashboard;
