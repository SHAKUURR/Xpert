import React, { useState } from "react";
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

const ProjectTable = ({ projects }) => {
	const [showDropdown, setShowDropdown] = useState(
		Array(projects.length).fill(false)
	);

	const handleDropdownToggle = (index) => {
		setShowDropdown((prevState) => {
			const newState = [...prevState];
			newState[index] = !newState[index];
			return newState;
		});
	};

	return (
		<div className="overflow-x-auto">
			<table className="min-w-full table-auto">
				<thead>
					<tr className="border-b border-[#D1D0DB] dark:border-[#302F3D]">
						<th className="text-left py-3 px-4 text-[#160329] dark:text-[#E4E4E4]">
							Project Name
						</th>
						<th className="text-left py-3 px-4 text-[#160329] dark:text-[#E4E4E4]">
							Category
						</th>
						<th className="text-left py-3 px-4 text-[#160329] dark:text-[#E4E4E4]">
							Team Lead
						</th>
						<th className="text-left py-3 px-4 text-[#160329] dark:text-[#E4E4E4]">
							Created By
						</th>
						<th className="text-left py-3 px-4 text-[#160329] dark:text-[#E4E4E4]">
							Created
						</th>
						<th className="text-left py-3 px-4 text-[#160329] dark:text-[#E4E4E4]">
							Deadline
						</th>
						<th className="text-left py-3 px-4 text-[#160329] dark:text-[#E4E4E4]">
							Progress
						</th>
						<th className="text-left py-3 px-4 text-[#160329] dark:text-[#E4E4E4]">
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{projects.map((project, index) => (
						<tr
							key={project.id}
							className="border-b border-[#E0E0E0] dark:border-[#3B3F48]"
						>
							<td className="py-3 px-4 font-[600] text-[#160329] dark:text-white">
								{project.name}
								<p className="text-[#8C8C8C] font-[500] dark:text-[#666666]">
									{project.id}
								</p>
							</td>
							<td className="py-3 px-4">
								<span
									className={`${getCategoryColor(
										project.category
									)} px-4 py-1 rounded-full font-[600]`}
								>
									{project.category}
								</span>
							</td>
							<td className="py-3 px-4 font-[600] text-[#666666] dark:text-[#8C8C8C]">
								{project.teamLead}
							</td>
							<td className="py-3 px-4 font-[600] text-[#666666] dark:text-[#8C8C8C]">
								{project.createdBy}
							</td>
							<td className="py-3 px-4 font-[600] text-[#666666] dark:text-[#8C8C8C]">
								{project.created}
							</td>
							<td className="py-3 px-4 font-[600] text-[#666666] dark:text-[#8C8C8C]">
								{project.deadline}
							</td>
							<td className="py-3 px-4 font-[600] text-[#666666] dark:text-[#8C8C8C]">
								<div className="">
									<span>{project.progress}%</span>
									<ProgressBar progress={project.progress} />
								</div>
							</td>
							<td className="py-3 px-4">
								<div className="relative">
									<button
										className="text-[#8C8C8C] font-[600] text-[20px] cursor-pointer"
										onClick={() => handleDropdownToggle(index)}
									>
										<Icon icon="tabler:dots-vertical" />
									</button>
									{showDropdown[index] && (
										<div className="absolute right-0 mt-2 w-[150px] bg-white border border-[#E0E0E0] dark:bg-[#1A1A1A] dark:border-[#3B3F48] rounded-lg shadow-lg">
											<ul>
												<li className="py-2 px-4 hover:bg-[#F3F4F6] dark:hover:bg-[#2E2E2E] cursor-pointer">
													Edit
												</li>
												<li className="py-2 px-4 hover:bg-[#F3F4F6] dark:hover:bg-[#2E2E2E] cursor-pointer">
													Delete
												</li>
											</ul>
										</div>
									)}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ProjectTable;
