import React, { useState } from "react";
import Stats from "./Stats";
import ProgressProject from "./ProgressProject";
import ProjectTable from "./ProgressTable";

const Project = () => {
	const [selectedTab, setSelectedTab] = useState("inProgress");

	return (
		<div>
			<h1 className="font-[600] text-[#161616] dark:text-white text-[27px]">
				Projects
			</h1>
			<div className="flex gap-3 text-center mt-8 justify-between flex-wrap">
				<div
					className={`bg-white px-5 py-5 w-full lg:w-[19%] rounded-lg shadow-lg cursor-pointer dark:bg-[#1A1A1A] ${
						selectedTab === "stats"
							? "border-4 border-[#008000]"
							: "border border-[#E1E1E1] dark:border-[#2B2B2B]"
					}`}
					onClick={() => setSelectedTab("stats")}
				>
					<Stats />
				</div>
				<div
					className={`bg-white px-2 md:px-3 lg:px-5 py-5 w-[48%] md:[30%] lg:w-[19%] rounded-lg shadow-lg flex flex-col items-center justify-between  gap-4 lg:gap-8 cursor-pointer dark:bg-[#1A1A1A] ${
						selectedTab === "upcoming"
							? "border-4 border-[#008000]"
							: "border border-[#E1E1E1] dark:border-[#2B2B2B]"
					}`}
					onClick={() => setSelectedTab("upcoming")}
				>
					<h2 className="text-[#1B0532] font-[600] text-[21px] dark:text-[#B3B3B3]">
						Upcoming Projects
					</h2>
					<p className="font-[600] text-[26px] text-[#666666] dark:text-[#FFFFFF]">
						15
					</p>
				</div>
				<div
					className={`bg-white px-2 md:px-3 lg:px-5 py-5 w-[48%] md:[30%] lg:w-[19%] rounded-lg shadow-lg flex flex-col items-center justify-between  gap-4 lg:gap-8 cursor-pointer dark:bg-[#1A1A1A] ${
						selectedTab === "inProgress"
							? "border-4 border-[#008000]"
							: "border border-[#E1E1E1] dark:border-[#2B2B2B]"
					}`}
					onClick={() => setSelectedTab("inProgress")}
				>
					<h2 className="text-[#1B0532] font-[600] text-[21px] dark:text-[#B3B3B3]">
						In Progress Projects
					</h2>
					<p className="font-[600] text-[26px] text-[#666666] dark:text-[#FFFFFF]">
						23
					</p>
				</div>
				<div
					className={`bg-white px-2 md:px-3 lg:px-5 py-5 w-[48%] md:[30%] lg:w-[19%] rounded-lg shadow-lg flex flex-col items-center justify-between  gap-4 lg:gap-8 cursor-pointer dark:bg-[#1A1A1A] ${
						selectedTab === "completed"
							? "border-4 border-[#008000]"
							: "border border-[#E1E1E1] dark:border-[#2B2B2B]"
					}`}
					onClick={() => setSelectedTab("completed")}
				>
					<h2 className="text-[#1B0532] font-[600] text-[21px] dark:text-[#B3B3B3]">
						Completed Projects
					</h2>
					<p className="font-[600] text-[26px] text-[#666666] dark:text-[#FFFFFF]">
						120
					</p>
				</div>
				<div
					className={`bg-white px-2 md:px-3 lg:px-5 py-5 w-[48%] md:[30%] lg:w-[19%] rounded-lg shadow-lg flex flex-col items-center justify-between  gap-4 lg:gap-8 cursor-pointer dark:bg-[#1A1A1A] ${
						selectedTab === "overdue"
							? "border-4 border-[#008000]"
							: "border border-[#E1E1E1]  dark:border-[#2B2B2B]"
					}`}
					onClick={() => setSelectedTab("overdue")}
				>
					<h2 className="text-[#1B0532] font-[600] text-[21px] dark:text-[#B3B3B3]">
						Overdue Projects
					</h2>
					<p className="font-[600] text-[26px] text-[#666666] dark:text-[#FFFFFF]">
						5
					</p>
				</div>
			</div>
			<div className="mt-5">
				{selectedTab === "stats" && <Stats />}
				{selectedTab === "upcoming" && <div>Upcoming Projects Component</div>}
				{selectedTab === "inProgress" && <ProgressProject />}
				{selectedTab === "completed" && <div>Completed Projects Component</div>}
				{selectedTab === "overdue" && <div>Overdue Projects Component</div>}
			</div>
		</div>
	);
};

export default Project;
