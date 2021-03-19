import Logo from "./logo";
import Filler from "./filler";

const Step = ({ active, classNames }) => (
	<div>
		{active === true ? (
			<div className="fade-in relative w-20 grid">
				<div
					className={`${classNames} absolute w-20 h-1 bg-green-400 top-5 z-10`}
				></div>
				<Logo
					width={20}
					height={32}
					type="green"
					classNames="relative z-20 place-self-center"
				/>
			</div>
		) : (
			<div className="relative w-20 grid">
				<div
					style={{ borderColor: "#ddd" }}
					className={`${classNames} absolute w-20 h-1 border top-5 z-10`}
				></div>
				<Filler
					width={20}
					height={32}
					classNames="fade-in relative z-20 place-self-center"
				/>
			</div>
		)}
	</div>
);

export default Step;
