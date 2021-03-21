const Clip = ({ classNames, width, height }) => (
	<div className={`${classNames} relative -bottom-1`}>
		<svg
			style={{ fill: "currentcolor" }}
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 1920 120"
		>
			<path
				id="clip"
				data-name="clip"
				d="M0,0S480-20,960-20,1920,0,1920,0V100H0Z"
				transform="translate(0 20)"
			/>
		</svg>
	</div>
);

export default Clip;
