export default function Container({ children, classNames, size }) {
	if (size === "small") {
		return (
			<article className={`${classNames ?? ""} max-w-lg w-full mx-auto`}>
				{children}
			</article>
		);
	}
	if (!size) {
		return (
			<article
				className={`${classNames ?? ""} max-w-2xl lg:max-w-6xl w-full mx-auto`}
			>
				{children}
			</article>
		);
	}
}
