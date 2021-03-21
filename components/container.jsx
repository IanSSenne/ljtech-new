export default function Container({ children, classNames, size }) {
	if (size === "small") {
		return (
			<div className={`${classNames} max-w-lg w-full mx-auto`}>{children}</div>
		);
	}
	if (size === "medium") {
		return <div>{children}</div>;
	}
}
