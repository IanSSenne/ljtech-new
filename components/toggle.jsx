const Toggle = ({ off, on, handleChange, isActive }) => (
	<label
		className="border-transparent ring-gray-200 border-2 ring-1 inline-block cursor-pointer rounded-full relative w-6 h-3 m-3"
		htmlFor="toggle"
	>
		<input
			className="opacity-0 w-0 h-0"
			name="toggle"
			id="toggle"
			type="checkbox"
			onChange={handleChange}
		/>
		<div
			style={{
				left: `${isActive * 12}px`,
				transition: ".5s",
			}}
			className="absolute top-0"
		>
			{!isActive && (
				<div
					className={`${off} text-xs flex content-center items-center justify-center overflow-hidden border-white border w-3 h-3 rounded-full select-none absolute -top-0.5`}
					style={{
						opacity: Number(!isActive),
						left: "-2px",
					}}
				></div>
			)}
			{isActive && (
				<div
					className={`${on} text-xs flex content-center items-center justify-center overflow-hidden border w-3 h-3 rounded-full select-none absolute -top-0.5`}
					style={{
						opacity: Number(isActive),
						left: "-2px",
					}}
				></div>
			)}
		</div>
	</label>
);

export default Toggle;
