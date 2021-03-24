import Logo from "./logo";
import Filler from "./filler";
import Container from "./container";

export default function Steps({ step, min, max }) {
	return (
		<Container size="small">
			<div className="relative flex content-center items-center justify-center">
				<div className="text-xs w-full m-1 absolute flex">
					{step >= 0 ? (
						<div className="relative flex flex-1 items-center">
							<Logo type="green" width="100%" height={30} />
							<span className="select-none absolute text-center w-full m-1">
								1
							</span>
						</div>
					) : (
						<div className="relative flex flex-1 items-center">
							<Filler width="100%" height={30} />
							<span className="select-none absolute text-center w-full m-1">
								1
							</span>
						</div>
					)}
					{step >= 1 ? (
						<div className="relative flex flex-1 items-center">
							<Logo type="green" width="100%" height={30} />
							<span className="select-none absolute text-center w-full m-1">
								2
							</span>
						</div>
					) : (
						<div className="relative flex flex-1 items-center">
							<Filler width="100%" height={30} />
							<span className="select-none absolute text-center w-full m-1">
								2
							</span>
						</div>
					)}
					{step >= 2 ? (
						<div className="relative flex flex-1 items-center">
							<Logo type="green" width="100%" height={30} />
							<span className="select-none absolute text-center w-full m-1">
								3
							</span>
						</div>
					) : (
						<div className="relative flex flex-1 items-center">
							<Filler width="100%" height={30} />
							<span className="select-none absolute text-center w-full m-1">
								3
							</span>
						</div>
					)}
					{step === 3 ? (
						<div className="relative flex flex-1 items-center">
							<Logo type="purple" width="100%" height={30} />
							<span className="select-none absolute text-center w-full m-1">
								4
							</span>
						</div>
					) : (
						<div className="relative flex flex-1 items-center">
							<Filler width="100%" height={30} />
							<span className="select-none absolute text-center w-full m-1">
								4
							</span>
						</div>
					)}
				</div>
				{console.log(step)}
				<progress
					className="h-1 w-full m-1 border rounded-sm overflow-hidden"
					min={min}
					max={max}
					value={
						step === 0
							? 0.5
							: step === 1 || step === 3
							? step * 0.5 + step
							: 2.5
					}
				>
					{step}
				</progress>
			</div>
		</Container>
	);
}
