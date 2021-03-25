import Container from "./container";
import Step from "./step";

export default function Steps({ step }) {
	const forms = ["1", "2", "3", "✔"];

	return (
		<Container size="small">
			<div className="flex px-2">
				{forms.map((form, i) => (
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
