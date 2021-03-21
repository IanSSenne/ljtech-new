import Logo from "./logo";
import Filler from "./filler";

const Step = ({ active, classNames, helper }) => (
	<div>
		{active === true ? (
			<div className="fade-in relative w-20 grid">
				<div
					style={{ top: "0.70rem" }}
					className={`${classNames} absolute w-20 h-1 bg-green-400 z-10`}
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
		) : (
			<div className="relative w-20 grid">
				<div
					style={{ borderColor: "#ddd", top: "0.70rem" }}
					className={`${classNames} absolute w-20 h-1 bg-gray-200 z-10`}
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
		)}
	</div>
);

export default Step;
