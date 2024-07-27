import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Header = ({ setOpen, onToggle, darkMode }) => {
	return (
		<div className="bg-white dark:bg-[#1A1A1A] h-14 md:h-24 p-[16px] md:p-[24px] flex justify-between items-center border-b border-gray-200 dark:border-[#1A1A1A]">
			<div className="md:flex items-center bg-[#FCFAFF] dark:bg-[#222222] py-3 pl-3 border dark:text-[#B3B3B3] border-[#E5E5E5] dark:border-[#272727] rounded-lg w-[50%] hidden">
				<Icon icon="iconamoon:search-light" className="dark:text-[#B3B3B3]" />
				<input
					type="text"
					placeholder="Search keywords"
					className="bg-transparent px-3 outline-none w-full"
				/>
			</div>
			<h2 className="md:hidden text-[18px] whitespace-pre text-[#8917FC] font-[600]">
				EmployeeXpert
			</h2>
			<div className="flex items-center gap-2 md:gap-3 text-[#8C8C8C] text-[23px] md:text-[26px]">
				<Icon icon="iconamoon:search-light" className="md:hidden" />
				<div onClick={onToggle}>
					{darkMode ? (
						<Icon
							icon="ion:moon-sharp"
							className="hidden md:block cursor-pointer"
						/>
					) : (
						<Icon
							icon="tabler:sun-filled"
							className="hidden md:block cursor-pointer"
						/>
					)}
				</div>

				<div className="relative">
					<Icon icon="basil:notification-solid" />
					<div className="w-2 h-2 rounded-full bg-red-600 absolute top-0 right-0"></div>
				</div>
				<Icon
					icon="ci:menu-alt-01"
					className="md:hidden"
					onClick={() => setOpen(true)}
				/>
				<img
					src="src/assets/profile.png"
					alt="profile"
					className="hidden md:block rounded-full aspect-square object-cover h-[40px] w-[40px] md:h-[53px] md:w-[53px]"
				/>
			</div>
		</div>
	);
};

export default Header;
