import React from "react";
import Outline from "../components/outline";
import Logo from "../components/logo";

const Steps = ({ step }) => (
	<div className="flex justify-center h-10">
		<div>
			<div>
				{step === 0 || step === 1 || step === 2 ? (
					<Logo width={20} height={20} fill="#ddd" />
				) : (
					<Outline width={20} height={20} fill="#ddd" />
				)}
			</div>
		</div>
		<div>
			<div>
				{step === 1 || step === 2 ? (
					<Logo width={20} height={20} fill="#ddd" />
				) : (
					<Outline width={20} height={20} fill="#ddd" />
				)}
			</div>
		</div>
		<div>
			<div>
				{step === 2 ? (
					<Logo width={20} height={20} fill="#ddd" />
				) : (
					<Outline width={20} height={20} fill="#ddd" />
				)}
			</div>
		</div>
	</div>
);

export default Steps;
