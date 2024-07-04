import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div>
        <Link className="logo" to="/actus">
          Biskeep
        </Link>
      </div>
      <Outlet />;
    </>
  );
}

export default Dashboard;
