import Link from "next/link";

export default ({ href, children, className, classNames }) => {
	return (
		<Link href={href}>
			<a className={`${classNames} inline-flex font-semibold px-2 py-1`}>
				{children}
			</a>
		</Link>
	);
};
