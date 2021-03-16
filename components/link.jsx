import Link from "next/link";

export default ({ href, children, classNames }) => {
	return (
		<Link href={href}>
			<a className={`${classNames} inline-flex font-semibold`}>{children}</a>
		</Link>
	);
};
