import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/HomePage";
import Contact from "./pages/HomePage";
import News from "./components/NewsPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Dashboard from "./pages/DashboardPage.jsx";
import GamesRank from "./components/GamesRank";
import TeamsRank from "./components/TeamsRank";
import Stats from "./components/Stats";
import Event from "./components/Event.jsx";
import About from "./components/About.jsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/auth",
				element: <AuthPage />,
				children: [
					{
						path: "register",
						element: <Register />,
					},
					{
						path: "login",
						element: <Login />,
					},
				],
			},
			{
				path: "/dashboard",
				element: <Dashboard />,
				children: [
					{
						path: "actus",
						element: <News />,
					},
					{
						path: "gamesrank",
						element: <GamesRank />,
					},
					{
						path: "stats",
						element: <Stats />,
					},
					{
						path: "teamsrank",
						element: <TeamsRank />,
					},
					{
						path: "events",
						element: <Event />,
					},
					{
						path: "about",
						element: <About />,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
