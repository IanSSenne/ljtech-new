import React from "react";
import Dark from "../../public/img/twitter-dark.svg";
import Light from "../../public/img/twitter-light.svg";

const Twitter = () => (
	<div>
		<div className="fade-in select-none dark:hidden" draggable="false">
			<Dark />
		</div>
		<div className="fade-in select-none hidden dark:block" draggable="false">
			<Light />
		</div>
	</div>
);

export default Twitter;
