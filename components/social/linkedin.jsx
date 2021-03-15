import React from "react";
import Dark from "../../public/img/linkedin-dark.svg";
import Light from "../../public/img/linkedin-light.svg";

const Linkedin = () => (
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

export default Linkedin;
