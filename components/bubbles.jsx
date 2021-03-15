const Bubbles = ({ dark, light }) => (
	<div className="p-2">
		<img
			className="fade-in p-2 select-none dark:hidden"
			src={dark}
			alt="bubbles-dark"
			draggable="false"
		/>
		<img
			className="fade-in p-2 select-none hidden dark:block"
			src={light}
			alt="bubbles-light"
			draggable="false"
		/>
	</div>
);

export default Bubbles;
