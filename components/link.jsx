import Link from "next/link";

export default ({ href, children, classNames, target }) => {
	return (
		<Link href={href}>
			<a className={`${classNames} inline-flex font-semibold`} target={target}>
				{children}
			</a>
		</Link>
	);
};
