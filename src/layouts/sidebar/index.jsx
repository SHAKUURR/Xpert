import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation, useRoutes } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Integration, mainMenu, Settings } from "../../lib/navigation";

const Sidebar = ({ open, setOpen }) => {
	let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
	// const [open, setOpen] = useState(isTabletMid ? false : true);
	const sidebarRef = useRef();
	const { pathname } = useLocation();

	useEffect(() => {
		if (isTabletMid) {
			setOpen(false);
		} else {
			setOpen(true);
		}
	}, [isTabletMid]);

	useEffect(() => {
		isTabletMid && setOpen(false);
	}, [pathname]);

	const Nav_animation = isTabletMid
		? {
				open: {
					x: 0,
					width: "18rem",
					transition: {
						damping: 40,
					},
				},
				closed: {
					x: -250,
					width: 0,
					transition: {
						damping: 40,
						delay: 0.15,
					},
				},
		  }
		: {
				open: {
					width: "18rem",
					transition: {
						damping: 40,
					},
				},
				closed: {
					width: "6.2rem",
					transition: {
						damping: 40,
					},
				},
		  };

	const subMenusList = [
		{
			name: "build",
			icon: RiBuilding3Line,
			menus: ["auth", "app settings", "stroage", "hosting"],
		},
		{
			name: "analytics",
			icon: TbReportAnalytics,
			menus: ["dashboard", "realtime", "events"],
		},
	];

	return (
		<div>
			<div
				onClick={() => setOpen(false)}
				className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
					open ? "block" : "hidden"
				} `}
			></div>
			<motion.div
				ref={sidebarRef}
				variants={Nav_animation}
				initial={{ x: isTabletMid ? -250 : 0 }}
				animate={open ? "open" : "closed"}
				className=" bg-white text-gray shadow-xl z-[999] max-w-[18rem] w-[18rem] py-3 px-3
            overflow-x-hidden overflow-y-auto md:relative fixed
         h-screen scrollbar-thin scrollbar-track-white  dark:scrollbar-track-[#1A1A1A] scrollbar-thumb-slate-100 dark:bg-[#1A1A1A] dark:scrollbar-thumb-[#B3B3B3]"
			>
				<div className="flex items-center gap-2.5 font-medium mb-5">
					<span
						className={
							open
								? "text-[27px] whitespace-pre text-[#8917FC] font-[600]"
								: "hidden"
						}
					>
						EmployeeXpert
					</span>
				</div>

				<div className="flex flex-col overflow-x-hidden">
					<div className="py-5 flex flex-col gap-4 ">
						<div className="border-b border-b-[#F0F2F5] pb-3">
							{open && (
								<div className="flex items-center justify-between gap-1 mb-2  px-3.5">
									<h3 className=" text-[#8C8C8C] text-[16px] font-[500]">
										MAIN MENU
									</h3>
									<Icon
										icon="radix-icons:chevron-down"
										className="dark:text-[#B3B3B3]"
									/>
								</div>
							)}
							{mainMenu.map((menu, i) => (
								<ul
									className="whitespace-pre px-2.5 text-[0.9rem] py-1 flex flex-col gap-1  font-[500] text-[#666666]"
									key={i}
								>
									<li className="text-[16px] font-[500]">
										<NavLink to={menu.path} className="link">
											<Icon
												icon={menu.icon}
												className="min-w-max text-[24px]"
												size={50}
											/>
											{open && (
												<>
													{menu.title}
													{
														<small
															className={
																menu.count
																	? "flex items-center justify-center w-[27px] h-[23px] rounded-full bg-[#E7D1FE] text-[#8917FC] ml-auto"
																	: ""
															}
														>
															{menu.count}
														</small>
													}
												</>
											)}
										</NavLink>
									</li>
								</ul>
							))}
						</div>
						<div>
							{open && (
								<div className="flex items-center justify-between gap-1 mb-2  px-3.5">
									<h3 className=" text-[#8C8C8C] text-[16px] font-[500]">
										INTEGRATIONS
									</h3>
									<Icon
										icon="radix-icons:chevron-down"
										className="dark:text-[#B3B3B3]"
									/>
								</div>
							)}
							{Integration.map((menu, i) => (
								<ul
									className="whitespace-pre px-2.5 text-[0.9rem] py-1 flex flex-col gap-1 font-[500] text-[#666666]"
									key={i}
								>
									<li className="text-[16px] font-[500]">
										<NavLink to={menu.path} className="link">
											<img
												src={menu.icon}
												alt={menu.title}
												className="min-w-max"
											/>
											{open && <>{menu.title}</>}
										</NavLink>
									</li>
								</ul>
							))}
						</div>
						<div className="border-b border-b-[#F0F2F5] pb-3">
							{open && (
								<div className="flex items-center justify-between gap-1 mb-2  px-3.5">
									<h3 className=" text-[#8C8C8C] text-[16px] font-[500]">
										Settings
									</h3>
									<Icon
										icon="radix-icons:chevron-down"
										className="dark:text-[#B3B3B3]"
									/>
								</div>
							)}
							{Settings.map((menu, i) => (
								<ul
									className="whitespace-pre px-2.5 text-[0.9rem] py-1 flex flex-col gap-1 font-[500] text-[#666666]"
									key={i}
								>
									<li className="text-[16px] font-[500]">
										<NavLink to={menu.path} className="link">
											<Icon
												icon={menu.icon}
												className="min-w-max text-[24px]"
												size={23}
											/>
											{open && <>{menu.title}</>}
										</NavLink>
									</li>
								</ul>
							))}
						</div>
					</div>
					{open && (
						<div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre  w-full  font-medium  ">
							<div className="flex p-4 items-center gap-2">
								<img src="src/assets/Avatars.png" alt="Avatar" />
								<div>
									<p className="text-[#101928] dark:text-[#D7E0EF] font-[600] text-[16px]">
										Adebayo Taofeeq
									</p>

									<small className="text-[#475367] dark:text-[#B3B3B3] text-[16px]">
										taofeeq@gmail.com
									</small>
								</div>
							</div>
						</div>
					)}
				</div>
				{/* {(open || isTabletMid) && (
							<div className="border-y py-5 border-slate-300 ">
								<small className="pl-3 text-slate-500 inline-block mb-2">
									Product categories
								</small>
								{subMenusList?.map((menu) => (
									<div key={menu.name} className="flex flex-col gap-1">
										<SubMenu data={menu} />
									</div>
								))}
							</div>
						)} */}

				<motion.div
					onClick={() => {
						setOpen(!open);
					}}
					animate={
						open
							? {
									x: 0,
									y: 0,
									rotate: 0,
							  }
							: {
									x: 13,
									y: 0,
									rotate: 180,
							  }
					}
					transition={{ duration: 0 }}
					className="absolute w-fit h-fit md:block z-50 hidden right-2 top-5 cursor-pointer text-[#8917FC]"
				>
					<IoIosArrowBack size={25} />
				</motion.div>
			</motion.div>
			<div className="m-3 hidden " onClick={() => setOpen(true)}>
				<MdMenu size={25} />
			</div>
		</div>
	);
};

export default Sidebar;
