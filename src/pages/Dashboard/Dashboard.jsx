import { useState } from "react";
import { TotalEmployee, TotalProjects } from "../../lib/fakeData";
import Announcement from "./Announcement";
import ProjectStat from "./projectStat";
import Requests from "./Request";
import Scheduler from "./Scheduler";
import WorkReportStat from "./WorkReportStat";

const personColors = {
	Design: "#B51B12",
	"Front-End": "#FE5F56",
	"Back-End": "#FFE1A7",
	Marketing: "#FFAB08",
	"IT Support": "#CCE6CC",
	CC: "#55AA55",
	PM: "#1662F6",
};
const Dashboard = () => {
	const [page, setPage] = useState("request");
	const totalScore = TotalEmployee.reduce(
		(sum, employee) => sum + parseInt(employee.score),
		0
	);
	return (
		<div>
			<h1 className="font-[600] text-[#161616] dark:text-white text-[27px]">
				Dashboard
			</h1>
			<div className="flex flex-col items-center md:items-start md:flex-row justify-center md:justify-between  gap-3 mt-8">
				<div className="flex-1">
					<div className="flex flex-col gap-4 md:flex-row">
						<div className="bg-white dark:bg-[#1A1A1A] p-4 border border-[#E1E1E1] dark:border-[#2B2B2B] shadow-lg rounded-lg w-full md:w-[50%]">
							<div className="flex justify-between items-center">
								<h3 className="text-[#161616] dark:text-white font-[600]">
									Total Employees
								</h3>
								<p className="font-[600] text-[#031F68] dark:text-[#D1D1D1]">
									150
								</p>
							</div>
							<div className="bg-gray-200 rounded-full h-6 mt-4 overflow-hidden">
								<div className="flex h-full">
									{TotalEmployee.map((employ, i) => (
										<div
											key={i + employ.person}
											style={{
												width: `${(employ.score / totalScore) * 100}%`,
												backgroundColor: personColors[employ.person],
											}}
										></div>
									))}
								</div>
							</div>
							<div className="flex flex-col gap-2 mt-4">
								{TotalEmployee.map((employ, i) => (
									<div
										key={i + employ}
										className="flex justify-between items-center"
									>
										<div className="flex items-center">
											<div
												className="w-[16px] h-[16px] rounded-full mr-2"
												style={{ backgroundColor: personColors[employ.person] }}
											></div>
											<h5 className="text-[#646464] dark:text-[#8C8C8C] font-[500]">
												{employ.person}
											</h5>
										</div>
										<p className="text-[#646464] dark:text-[#8C8C8C] font-[500]">
											{employ.score}
										</p>
									</div>
								))}
							</div>
						</div>
						<div className="bg-white dark:bg-[#1A1A1A] p-4 border border-[#E1E1E1] dark:border-[#2B2B2B] shadow-lg rounded-lg w-full md:w-[50%]">
							<div className="flex justify-between items-center">
								<h3 className="text-[#161616] font-[600] dark:text-white">
									Total Projects
								</h3>
								<p className="font-[600] text-[#031F68] dark:text-[#D1D1D1]">
									163
								</p>
							</div>
							<ProjectStat />
							<div
								className="flex items-center gap-3 flex-wrap
              "
							>
								{TotalProjects.map((project, i) => (
									<div
										className="flex gap-4 items-center w-[100%] sm:w-[50%] md:w-[48%]"
										key={i}
									>
										<div className="flex items-center">
											<div
												className="w-[16px] h-[16px] rounded-full mr-2"
												style={{ backgroundColor: project.color }}
											></div>
											<h5 className="text-[#646464] dark:text-[#8C8C8C] font-[500]">
												{project.project}
											</h5>
										</div>
										<p className="text-[#646464] dark:text-[#8C8C8C] font-[600]">
											{project.count}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="bg-white dark:bg-[#1A1A1A] p-4 border border-[#E1E1E1] dark:border-[#2B2B2B] shadow-lg rounded-lg mt-6">
						<div className="flex justify-between items-center flex-wrap sm:flex-nowrap">
							<h3 className="text-[#161616] dark:text-white font-[600] order-1 sm:order-none">
								Work Report
							</h3>
							<div className="flex gap-6 items-center order-3 sm:order-none w-full sm:w-auto mt-4 sm:mt-0">
								<div className="flex items-center">
									<div className="w-[16px] h-[16px] rounded-full mr-2 bg-[#8917FC]"></div>
									<p className="text-[#161616] dark:text-white font-[500] text-[14px]">
										Performance
									</p>
								</div>
								<div className="flex items-center">
									<div className="w-[16px] h-[16px] rounded-full mr-2 bg-[#E0A100]"></div>
									<p className="text-[#161616] dark:text-white font-[500] text-[14px]">
										Project
									</p>
								</div>
							</div>
							<select
								name="days"
								id="days"
								className="py-[8px] px-[8px] border border-[#E1E1E1] rounded-[4px] outline-none text-[#3D3D3D] font-[400] order-2 sm:order-none"
							>
								<option value="This Month">This Month</option>
								<option value="Last Week">Last Week</option>
								<option value="This Year">This Year</option>
							</select>
						</div>

						<div className="w-full h-20rem md:h-[31rem] mt-5 overflow-x-auto">
							{" "}
							<WorkReportStat />
						</div>
					</div>
				</div>
				<div className="w-full md:w-[30%] hidden md:flex flex-col gap-4">
					<Requests />
					<Scheduler />
					<Announcement />
				</div>
				<div className="block  md:hidden  w-full my-10">
					<div className="flex gap-10 items-start justify-between w-full text-left">
						<button
							onClick={() => setPage("request")}
							className={`font-[600] ${
								page === "request"
									? "text-[#8917FC] border-b-2 border-b-[#8917FC] pb-2"
									: "text-[#8C8C8C]"
							}`}
						>
							Requests
						</button>
						<button
							onClick={() => setPage("schedules")}
							className={`font-[600] ${
								page === "schedules"
									? "text-[#8917FC]  border-b-2 border-b-[#8917FC] pb-2"
									: "text-[#8C8C8C]"
							}`}
						>
							Schedules
						</button>
						<button
							onClick={() => setPage("announcement")}
							className={`font-[600] ${
								page === "announcement"
									? "text-[#8917FC]  border-b-2 border-b-[#8917FC] pb-2"
									: "text-[#8C8C8C]"
							}`}
						>
							Announcement
						</button>
					</div>
					<div className="mt-5">
						{page === "request" && <Requests />}
						{page === "schedules" && <Scheduler />}
						{page == "announcement" && <Announcement />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
