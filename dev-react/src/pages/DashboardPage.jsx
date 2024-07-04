import { Outlet, NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import { AiOutlineHome, AiOutlineTeam } from "react-icons/ai";
import { IoStatsChartSharp, IoIosCall, IoMdCalendar } from "react-icons/io";
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
								<IoStatsChartSharp className="icons" /> Statistiques
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
