import Filler from "./filler";
import Logo from "./logo";

export default function Step({ active, classNames, helper }) {
	if (active === true) {
		return (
			<div
				style={{ width: "min(5rem, 22vw)" }}
				className="fade-in relative grid"
			>
				<div
					style={{ top: "0.70rem", width: "min(5rem, 22vw)" }}
					className={`${
						classNames ? classNames : ""
					} absolute h-1 bg-green-400 z-10`}
				></div>
				<Logo
					width={20}
					height={20}
					type="green"
					classNames="text-sm relative z-20 font-semibold"
				>
					<sub className="select-none">
						<sub>{helper}</sub>
					</sub>
				</Logo>
			</div>
		);
	} else {
		return (
			<div style={{ width: "min(5rem, 22vw)" }} className="relative grid">
				<div
					style={{
						borderColor: "#ddd",
						top: "0.70rem",
						width: "min(5rem, 22vw)",
					}}
					className={`${
						classNames ? classNames : ""
					} absolute h-1 bg-gray-200 z-10`}
				></div>
				<Filler
					width={20}
					height={20}
					classNames="text-sm fade-in relative z-20 font-semibold"
				>
					<sub className="select-none">
						<sub>{helper}</sub>
					</sub>
				</Filler>
			</div>
		);
	}
}
