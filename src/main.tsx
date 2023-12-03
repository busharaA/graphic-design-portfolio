import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../src/assets/styles/scss/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import CaseStudy from "./pages/CaseStudy.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: "/about",
				element: <About />
			},
			{
				path: "/portfolio",
				element: <Portfolio />,
			},
			{
				path: "/portfolio/:projectId",
				element: <CaseStudy />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
