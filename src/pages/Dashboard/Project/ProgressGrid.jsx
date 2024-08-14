import React from "react";
import ProgressBar from "../../../lib/progressbar";
import { Icon } from "@iconify/react/dist/iconify.js";

const getCategoryColor = (category) => {
	switch (category) {
		case "Design":
			return "bg-[#FFFBE3] text-[#936B06] dark:bg-[#2E2819] dark:text-[#AB7D07]";
		case "Development":
			return "bg-[#FFECE5] text-[#AD3307] dark:bg-[#2E2119] dark:text-[#FF6783]";
		case "Pitching":
			return "bg-[#F1FFF1] text-[#2B952B] dark:bg-[#192E19] dark:text-[#30A930]";
		default:
			return "bg-gray-100";
	}
};

const ProgressGrid = ({ projects }) => {
	return (
		<div className="flex gap-5 flex-wrap">
			{projects.map((project) => (
				<div
					key={project.id}
					className="border border-[#E0E0E0] dark:border-[#3B3F48] p-3 rounded-lg w-full md:w-[48%] lg:w-[32%] dark:bg-[#1A1A1A]"
				>
					<div className="flex items-center justify-between gap-3">
						<h3 className="font-[600] text-[#160329] text-[17px] dark:text-white">
							{project.name}
						</h3>
						<Icon
							icon="tabler:dots-vertical"
							className="text-[#8C8C8C] font-[600] text-[20px] cursor-pointer"
						/>
					</div>
					<p className="text-[#646464] font-[500] dark:text-[#646464]">
						{project.id}
					</p>
					<div className="flex flex-col gap-3 my-4">
						<div className="flex items-center justify-between">
							<h3 className="font-[500] text-[#8C8C8C] text-[17px] dark:text-[#666666]">
								Category:
							</h3>
							<p
								className={`${getCategoryColor(
									project.category
								)} px-4 py-1 rounded-full font-[600]`}
							>
								{project.category}
							</p>
						</div>
						<div className="flex items-center justify-between">
							<h3 className="font-[500] text-[#8C8C8C] text-[17px] dark:text-[#666666]">
								Team Lead:
							</h3>
							<p className="font-[600] text-[#666666] text-[16px] dark:text-[#8C8C8C]">
								{project.teamLead}
							</p>
						</div>
						<div className="flex items-center justify-between">
							<h3 className="font-[500] text-[#8C8C8C] text-[17px] dark:text-[#666666]">
								Created By:
							</h3>
							<p className="font-[600] text-[#666666] text-[16px] dark:text-[#8C8C8C]">
								{project.createdBy}
							</p>
						</div>
						<div className="flex items-center justify-between">
							<h3 className="font-[500] text-[#8C8C8C] text-[17px] dark:text-[#666666]">
								Created:
							</h3>
							<p className="font-[600] text-[#666666] text-[16px] dark:text-[#8C8C8C] flex items-center gap-1">
								<Icon icon="mingcute:calendar-fill" />
								<span>{project.created}</span>
							</p>
						</div>
						<div className="flex items-center justify-between">
							<h3 className="font-[500] text-[#8C8C8C] text-[17px] dark:text-[#666666]">
								Deadline:
							</h3>
							<p className="font-[600] text-[#666666] text-[16px] dark:text-[#8C8C8C] flex items-center gap-1">
								<Icon icon="mingcute:calendar-fill" />
								<span>{project.deadline}</span>
							</p>
						</div>
					</div>
					<div className="mt-6">
						<div className="flex items-center justify-between mb-1">
							<h3 className="font-[500] text-[#404040] text-[17px] dark:text-[#8C8C8C]">
								Progress:
							</h3>
							<p className="font-[600] text-[#404040] text-[16px] dark:text-[#8C8C8C]">
								{project.progress}%
							</p>
						</div>
						<ProgressBar progress={project.progress} />
					</div>
				</div>
			))}
		</div>
	);
};

export default ProgressGrid;
