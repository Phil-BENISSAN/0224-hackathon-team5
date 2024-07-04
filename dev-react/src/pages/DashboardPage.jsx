import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Dashboard() {
	return (
		<>
			<div>
				<Link className="logo" to="/">
					Biskeep
				</Link>
			</div>
			<Outlet />;
		</>
	);
}

export default Dashboard;
