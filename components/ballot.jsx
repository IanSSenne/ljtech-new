export default function Ballot({ checked, fillOn, fillOff }) {
	if (checked === true) {
		return (
			<svg
				style={{ fill: fillOn ? fillOn : "currentColor" }}
				width="24"
				height="24"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M20.8388 6.69459L8.81799 18.7154L3.16113 13.0586L4.57113 11.6486L8.81799 15.8854L19.4288 5.28459L20.8388 6.69459Z"></path>
			</svg>
		);
	} else {
		return (
			<svg
				style={{ fill: fillOff ? fillOff : "currentColor" }}
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"></path>
			</svg>
		);
	}
}
