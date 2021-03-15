import React from "react";
import Dark from "../../public/img/facebook-dark.svg";
import Light from "../../public/img/facebook-light.svg";

const Facebook = () => (
	<div>
		<div className="fade-in select-none dark:hidden" draggable="false">
			<Dark />
		</div>
		<div className="fade-in select-none hidden dark:block" draggable="false">
			<Light />
		</div>
	</div>
);

export default Facebook;
