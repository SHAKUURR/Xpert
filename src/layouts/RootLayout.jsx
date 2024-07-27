import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./sidebar/Header";
import { useState } from "react";

function RootLayout({ onToggle, darkMode }) {
	const [open, setOpen] = useState(true);

	return (
		<div className={`${darkMode && "dark"}`}>
			<div className="flex flex-row bg-neutral-100 dark:bg-[#141414] h-screen w-screen overflow-hidden">
				<Sidebar open={open} setOpen={setOpen} />

				{/* <main className="max-w-5xl flex-1 mx-auto py-4">{children}</main> */}
				<main className="flex flex-col flex-1">
					<Header setOpen={setOpen} onToggle={onToggle} darkMode={darkMode} />
					<div className="flex-1 p-4 min-h-0 overflow-y-auto">{<Outlet />}</div>
				</main>
			</div>
		</div>
	);
}

export default RootLayout;
