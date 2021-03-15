const Button = ({ handleClick, classNames, children }) => (
	<button
		onClick={handleClick}
		className={`${classNames} select-none border rounded-sm px-2 py-1`}
	>
		{children}
	</button>
);

export default Button;
