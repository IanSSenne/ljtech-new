import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import React from "react";

export default function Theme() {
	const [active, setActive] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setActive(true), []);

	const Toggle = () => {
		setTheme(theme === "dark" ? "light" : "dark");
		setActive((prev) => !prev);
	};

	return (
		<label
			className="border-transparent ring-gray-200 border-2 ring-1 inline-block cursor-pointer rounded-full relative w-6 h-3 m-3"
			htmlFor="switchTheme"
		>
			<input
				className="opacity-0 w-0 h-0"
				name="switchTheme"
				id="switchTheme"
				type="checkbox"
				onChange={Toggle}
			/>
			<div
				style={{
					left: `${active * 16}px`,
					transition: ".5s",
				}}
				className="absolute -top-1.5"
			>
				{!active && (
					<div
						className={`absolute ring-gray-300 text-xs flex content-center items-center justify-center overflow-hidden hover:border-yellow-400 border bg-dark w-5 h-5 pb-0.5 rounded-full select-none`}
						style={{
							opacity: Number(!active),
							left: "-8px",
						}}
					>
						🌙
					</div>
				)}
				{active && (
					<div
						className={`absolute text-xs flex content-center items-center justify-center overflow-hidden border border-purple-800 bg-purple-500 w-5 h-5 pb-0.5 rounded-full select-none`}
						style={{
							opacity: Number(active),
							left: "-8px",
						}}
					>
						🌞
					</div>
				)}
			</div>
		</label>
	);
}
