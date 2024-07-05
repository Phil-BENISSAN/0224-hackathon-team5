import { Outlet, NavLink } from "react-router-dom";
import "../styles/sidebar.css";
<<<<<<< HEAD
import logoSrc from "../assets/biskeep.png";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoMdCalendar } from "react-icons/io";
=======
import { AiOutlineHome, AiOutlineTeam } from "react-icons/ai";
import { IoIosCall, IoMdCalendar } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";

>>>>>>> e22a0c3dc524e6cf014b2bdebf0525b49cfb5442
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
							<NavLink
								to="/dashboard/actus"
								className={({ isActive }) =>
									isActive ? "sidebar-link active" : "sidebar-link"
								}>
								<AiOutlineHome className="icons" />
								Accueil
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/teamsRank"
								className={({ isActive }) =>
									isActive ? "sidebar-link active" : "sidebar-link"
								}>
								<AiOutlineTeam className="icons" /> Equipes
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/stats"
								className={({ isActive }) =>
									isActive ? "sidebar-link active" : "sidebar-link"
								}>
								<IoStatsChart className="icons" /> Statistiques
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/events"
								className={({ isActive }) =>
									isActive ? "sidebar-link active" : "sidebar-link"
								}>
								<IoMdCalendar className="icons" /> Events
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/about"
								className={({ isActive }) =>
									isActive ? "sidebar-link active" : "sidebar-link"
								}>
								<IoIosCall className="icons" /> A propos
							</NavLink>
						</li>
					</ul>
				</nav>
				<div className="sidebar-footer">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? "sidebar-link active" : "sidebar-link"
						}>
						<CiLogout className="icons" />
						<p className="paragraphSidebar">Se déconnecter</p>
					</NavLink>
				</div>
			</div>
			<Outlet />
		</>
	);
}

export default Dashboard;
