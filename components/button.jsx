const Button = ({ classNames, children, handleClick, type }) => (
	<button
		onClick={handleClick}
		className={`${classNames} select-none border rounded-sm px-2 py-1`}
		type={type}
	>
		{children}
	</button>
);

export default Button;
