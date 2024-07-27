import React from "react";
import { SchedulerData } from "../../lib/fakeData";

const Scheduler = () => {
	return (
		<div className="w-full bg-white rounded-lg p-4 md:p-3 shadow-lg dark:bg-[#1A1A1A] border  border-[#E1E1E1] dark:border-[#2B2B2B]">
			<div className="flex items-center justify-between gap-2 dark:text-white">
				<h3 className="text-[#161616] font-[600] dark:text-white">
					Schedules (10)
				</h3>
				<button>View All</button>
			</div>
			<div className="mt-4 h-[14.5rem] overflow-y-auto scrollbar-thin scrollbar-track-[#D1D1D1]  dark:scrollbar-track-[#1A1A1A] scrollbar-thumb-[#1B0532] dark:bg-[#1A1A1A] dark:scrollbar-thumb-[#B3B3B3] scrollbar-thumb-rounded-full scrollbar-track-rounded-full pr-3">
				{SchedulerData.map((schedule, i) => (
					<div
						key={schedule + i}
						className="border border-[#E0E0E0] dark:border-[#2C2C2C] rounded-lg p-3 mb-4"
					>
						<div className="flex items-center gap-2">
							<h4 className="text-[#161616] font-[600] text-[15px] dark:text-white">
								{schedule.meeting}
							</h4>
							<p className="text-[#936B06] bg-[#FFFBE3] rounded-full font-[600] py-2 px-4 text-[13px] dark:text-[#AB7D07] dark:bg-[#3C321B]">
								{schedule.type}
							</p>
						</div>
						<p className="dark:text-[#646464]">{schedule.date}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Scheduler;
