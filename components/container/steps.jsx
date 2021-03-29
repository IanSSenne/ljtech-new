import { actions } from "@lib/content";
import Container from "./container";
import Step from "./step";

export default function Steps({ step }) {
	return (
		<Container size="small">
			<div className="flex px-2">
				{actions.map((form, i) => (
					<Step
						type={step >= i ? "green" : "filler"}
						classNames={step >= i ? "bg-green-500" : "bg-transparent"}
						text={step >= i ? "text-light" : "text-dark"}
						step={form}
						key={i}
					/>
				))}
			</div>
		</Container>
	);
}
