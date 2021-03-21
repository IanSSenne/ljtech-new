import Filler from "./filler";
import Logo from "./logo";

const submitted = (
	<sub className="select-none px-2">
		<sub>Submitted</sub>
	</sub>
);

export default function Step({ active, classNames, helper }) {
	if (active === true) {
		return (
			<div
				style={{ width: "min(6rem, 22vw)" }}
				className="fade-in relative grid"
			>
				<div
					style={{ top: "0.70rem", width: "min(6rem, 22vw)" }}
					className={`${classNames} absolute h-1 bg-purple-400 z-10`}
				></div>
				<Logo
					before={submitted}
					classNames="text-sm relative z-20 font-semibold"
					type="purple"
					width={20}
					height={20}
				></Logo>
			</div>
		);
	} else {
		return (
			<div style={{ width: "min(6rem, 22vw)" }} className="relative grid">
				<div
					style={{
						borderColor: "#ddd",
						top: "0.70rem",
						width: "min(6rem, 22vw)",
					}}
					className={`${classNames} absolute h-1 bg-gray-200 z-10`}
				></div>
				<Filler
					before={submitted}
					classNames="text-sm fade-in relative z-20 font-semibold"
					width={20}
					height={20}
				>
					<sub className="select-none">
						<sub>{helper}</sub>
					</sub>
				</Filler>
			</div>
		);
	}
}
