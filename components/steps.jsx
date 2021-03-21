import React from "react";
import Final from "../components/final";
import Step from "../components/step";

const Steps = ({ step }) => (
	<div className="flex justify-center h-8">
		<div>
			{step === 0 || step === 1 || step === 2 ? (
				<Step helper="Step 1" active={true} classNames="rounded-l-full" />
			) : (
				<Step helper="Step 1" active={false} classNames="rounded-r-full" />
			)}
		</div>
		<div>
			{step === 1 || step === 2 ? (
				<Step helper="Step 2" active={true} />
			) : (
				<Step helper="Step 2" active={false} />
			)}
		</div>
		<div>
			{step === 2 ? (
				<Step helper="Step 3" active={true} />
			) : (
				<Step helper="Step 3" active={false} />
			)}
		</div>
		<div>
			{step === 2 ? (
				<Final before="Submitted" active={true} classNames="rounded-r-full" />
			) : (
				<Final before="Submitted" active={false} classNames="rounded-r-full" />
			)}
		</div>
	</div>
);

export default Steps;
