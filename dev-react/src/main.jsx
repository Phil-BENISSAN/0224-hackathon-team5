import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/HomePage";
import Contact from "./pages/HomePage";
import News from "./pages/NewsPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

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
        path: "/dashboard",
        element: <DashboardPage />,
        children: [
          {
            path: "/actus",
            element: <News />,
          },
          {
            path: "/gamesrank",
            element: <GamesRankPage />,
          },
          {
            path: "/teamsrank",
            element: <TeamsRankPage />,
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
