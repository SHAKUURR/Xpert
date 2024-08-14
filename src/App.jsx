import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Project from "./pages/Dashboard/Project/Project";
import { useState } from "react";
import Performance from "./pages/Dashboard/Performance";

const App = () => {
	const [darkMode, setDarkMode] = useState(false);
	const ToggleMode = () => {
		setDarkMode(!darkMode);
	};
	return (
		<Routes>
			<Route
				path="/"
				element={<RootLayout onToggle={ToggleMode} darkMode={darkMode} />}
			>
				<Route index={true} element={<Dashboard />} />
				<Route path="/project" element={<Project />} />
				<Route path="/performance" element={<Performance />} />
			</Route>
		</Routes>
	);
};

export default App;
