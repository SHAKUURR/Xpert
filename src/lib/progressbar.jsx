const ProgressBar = ({ progress }) => {
	return (
		<div className="w-full bg-[#D1D1D1] dark:bg-[#3B3B3B] rounded-full h-3">
			<div
				className="bg-[#2B952B] h-3 rounded-full"
				style={{ width: `${progress}%` }}
			></div>
		</div>
	);
};
export default ProgressBar;
