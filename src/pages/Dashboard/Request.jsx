import React from "react";

const requests = [
	{
		id: 1,
		type: "Leave",
		count: 10,
		extra: "+7",
		profiles: [
			"https://randomuser.me/api/portraits/women/2.jpg",
			"https://randomuser.me/api/portraits/men/2.jpg",
			"https://randomuser.me/api/portraits/men/7.jpg",
			// Add more profile images as needed
		],
	},
	{
		id: 2,
		type: "Profile Update",
		count: 12,
		extra: "+9",
		profiles: [
			"https://randomuser.me/api/portraits/women/15.jpg",
			"https://randomuser.me/api/portraits/women/11.jpg",
			"https://randomuser.me/api/portraits/men/9.jpg",
			// Add more profile images as needed
		],
	},
];

const Requests = () => {
	return (
		<div className="w-full bg-white dark:bg-[#1A1A1A] border  border-[#E1E1E1] dark:border-[#2B2B2B] rounded-lg p-4 md:p-3 shadow-lg">
			<h3 className="text-[#161616] font-[600] dark:text-white mb-3">
				Requests
			</h3>
			{requests.map((request) => (
				<div
					key={request.id}
					className="border border-[#E0E0E0] dark:border-[#2C2C2C] rounded-lg p-3 mb-4 flex items-center justify-between"
				>
					<div>
						<p className="text-[#E10D33] bg-[rgba(225,13,51,0.1)] py-1 px-3 rounded-full text-[12px] font-[600] dark:bg-[rgba(242,22,62,0.1)] dark:text-[rgba(255,103,131,1)]">
							{request.type}
						</p>
						<div className="flex items-center">
							<div className="flex -space-x-4 mt-2">
								{request.profiles.map((profile, index) => (
									<img
										key={index}
										src={profile}
										alt={`Profile ${index}`}
										className="w-9 h-9 rounded-full border-[4px] border-[#F9F9F9] dark:border-[#131313]"
									/>
								))}
							</div>
							<p className="text-[#444444]  font-[600] mt-2">{request.extra}</p>
						</div>
					</div>
					<h5 className="font-[700] text-[#3D3D3D] text-[40px] dark:text-[#D1D1D1]">
						{request.count}
					</h5>
				</div>
			))}
		</div>
	);
};

export default Requests;
