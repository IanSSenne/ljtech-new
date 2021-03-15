const Logo = ({ children, classNames, src, width, height }) => (
	<div className={classNames}>
		<img
			className="select-none m-1 inline-flex"
			src={src}
			alt="ljtech logo"
			width={width}
			height={height}
			draggable="false"
		/>
		{children}
	</div>
);

export default Logo;
