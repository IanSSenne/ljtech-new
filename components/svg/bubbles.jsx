const Bubbles = ({ classNames, width, height }) => (
	<div className={`${classNames ?? ""} fade-in`}>
		<svg
			style={{ fill: "currentColor" }}
			xmlns="http://www.w3.org/2000/svg"
			className="overflow-visible"
			width={width}
			height={height}
			viewBox="0 0 457 454"
		>
			<g id="Ellipse_1" data-name="Ellipse 1" stroke="none" strokeWidth="1">
				<circle cx="183" cy="183" r="183" stroke="none" />
				<circle cx="183" cy="183" r="182.5" fill="none" />
			</g>
			<g
				id="Ellipse_2"
				data-name="Ellipse 2"
				transform="translate(284 316)"
				stroke="none"
				strokeWidth="1"
			>
				<circle cx="69" cy="69" r="69" stroke="none" />
				<circle cx="69" cy="69" r="68.5" fill="none" />
			</g>
			<g
				id="Ellipse_3"
				data-name="Ellipse 3"
				transform="translate(366 225)"
				stroke="none"
				strokeWidth="1"
			>
				<circle cx="45.5" cy="45.5" r="45.5" stroke="none" />
				<circle cx="45.5" cy="45.5" r="45" fill="none" />
			</g>
		</svg>
	</div>
);

export default Bubbles;