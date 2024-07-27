import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Announcement = () => {
	return (
		<div className="w-full bg-white rounded-lg p-4 md:p-3 shadow-lg dark:bg-[#1A1A1A] border  border-[#E1E1E1] dark:border-[#2B2B2B]">
			{" "}
			<div className="flex items-center justify-between gap-2 dark:text-white">
				<h3 className="text-[#161616] font-[600] dark:text-white">
					Announcements
				</h3>
				<button>See history</button>
			</div>
			<p className="text-[#777777] font-[400] text-[18px] my-5">
				Make an announcement to everyone
			</p>
			<Player
				src="https://lottie.host/b38860c8-f991-47d5-a21a-571e73c28b05/HR59tscxXl.json"
				className="player w-[40%] h-auto"
				loop
				autoplay
			/>
			<button className="bg-[#8917FC] text-white w-full p-3 rounded-lg text-[18px] font-[600]">
				Create Announcement
			</button>
		</div>
	);
};

export default Announcement;
