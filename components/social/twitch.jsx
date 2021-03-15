import React from "react";
import Dark from "../../public/img/twitch-dark.svg";
import Light from "../../public/img/twitch-light.svg";

const Twitch = () => (
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

export default Twitch;
