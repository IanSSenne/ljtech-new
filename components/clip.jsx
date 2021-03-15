const Clip = ({ dark, light }) => (
	<div className="relative top-2 z-30">
		<img
			className="select-none dark:hidden"
			src={dark}
			alt="header-dark"
			draggable="false"
		/>
		<img
			className="select-none hidden dark:block"
			src={light}
			alt="header-light"
			draggable="false"
		/>
	</div>
);

export default Clip;
