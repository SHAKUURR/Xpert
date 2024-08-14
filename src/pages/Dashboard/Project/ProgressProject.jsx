import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import ProgressGrid from "./ProgressGrid";
import ProjectTable from "./ProgressTable";
import { ProjectData } from "../../../lib/fakeData"; // Ensure you import your data

const ProgressProject = () => {
	const [isGridView, setIsGridView] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");

	const handleToggleView = () => {
		setIsGridView(!isGridView);
	};

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const filteredProjects = ProjectData.filter((project) =>
		project.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="bg-white px-3 py-4 mt-8 rounded-lg dark:bg-[#1A1A1A]">
			<div className="flex gap-3 justify-between items-center border-b border-b-[#D1D0DB] dark:border-b-[#302F3D] pb-4 mb-6 flex-wrap">
				<div className="flex items-center gap-5">
					<div className="md:flex items-center bg-[#FCFAFF] dark:bg-[#222222] py-2 pl-3 border dark:text-[#B3B3B3] border-[#E5E5E5] dark:border-[#272727] rounded-lg md:w-full hidden">
						<Icon
							icon="iconamoon:search-light"
							className="dark:text-[#B3B3B3]"
						/>
						<input
							type="text"
							placeholder="Search keywords"
							className="bg-transparent px-3 outline-none"
							value={searchTerm}
							onChange={handleSearchChange}
						/>
					</div>
					<div className="dark:text-[#B3B3B3]  bg-[#FCFAFF] dark:bg-[#222222] border  border-[#E5E5E5] dark:border-[#272727] rounded-lg p-3 block md:hidden">
						<Icon
							icon="iconamoon:search-light"
							className=" dark:text-[#B3B3B3]"
						/>
					</div>

					<button className="flex items-center gap-3 text-[#344054] text-[20px] font-[600] px-4 py-2 border border-[#E5E5E5] dark:border-[#2C2C2C] dark:text-[#8C8C8C]  dark:bg-[#222222] rounded-lg">
						<Icon icon="ion:filter" />
						<h3 className="hidden md:block">Filter</h3>
					</button>
					<button
						className="flex items-center gap-3 text-[#344054] text-[20px] font-[600] px-4 py-2 border border-[#E5E5E5] rounded-lg dark:border-[#2C2C2C] dark:text-[#8C8C8C]  dark:bg-[#222222]"
						onClick={handleToggleView}
					>
						<Icon
							icon={
								isGridView
									? "heroicons-solid:view-grid"
									: "heroicons-solid:view-list"
							}
						/>
						<h3 className="hidden md:block">{isGridView ? "Grid" : "List "}</h3>
					</button>
				</div>
				<button className="bg-[#8917FC] py-2 px-3 rounded-lg text-white text-[18px] w-auto md:w-[25%] lg:w-[15%] font-[600]">
					<span>+</span> Add Project
				</button>
			</div>
			{isGridView ? (
				<ProgressGrid projects={filteredProjects} />
			) : (
				<ProjectTable projects={filteredProjects} />
			)}
		</div>
	);
};

export default ProgressProject;
