import React from "react";
import Outline from "../components/outline";
import Logo from "../components/logo";
import Step from "../components/step";

const Steps = ({ step }) => (
	<div className="flex justify-center h-10">
		<div>
			{step === 0 || step === 1 || step === 2 ? (
				<Step active={true} classNames="rounded-l-full" />
			) : (
				<Step active={false} classNames="rounded-r-full" />
			)}
		</div>
		<div>
			{step === 1 || step === 2 ? (
				<Step active={true} />
			) : (
				<Step active={false} />
			)}
		</div>
		<div>
			{step === 2 ? (
				<Step active={true} classNames="rounded-r-full" />
			) : (
				<Step active={false} classNames="rounded-r-full" />
			)}
		</div>
	</div>
);

export default Steps;
