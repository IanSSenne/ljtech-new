import React from "react";
import Dark from "../../public/img/github-dark.svg";
import Light from "../../public/img/github-light.svg";

const Github = () => (
	<div>
		<div className="fade-in select-none dark:hidden" draggable="false">
			<Dark />
		</div>
		<div
			className="fade-in select-none hidden dark:block"
			draggable="false"
		>
			<Light />
		</div>
	</div>
);

export default Github;
