import Logo from "@svg/logo";

export default function Step({ classNames, step, text, color }) {
	return (
		<div className="flex-1 flex content-center items-center justify-center h-8 relative">
			<span
				className={`${classNames ?? ""} border flex-1 h-1 z-20 ${
					step === "1" && "rounded-l-full"
				}`}
			></span>
			<div className="absolute -right-2 z-40 grid">
				<span
					style={{ height: "1.07rem" }}
					className={`${text} self-center w-5 h-4 text-xs text-center font-bold`}
				>
					{step}
				</span>
			</div>
			<Logo
				classNames="w-5 h-5 absolute -right-1 z-30"
				width="20"
				height="20"
				color={color}
				index={0}
			/>
		</div>
	);
}
