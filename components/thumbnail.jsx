import Link from "./link";

const Thumbnail = ({
	content,
	children,
	classNames,
	helper,
	href,
	src,
	subtitle,
	title,
}) => (
	<li
		style={{
			backgroundColor: "#363739",
			maxWidth: "min(20rem,100vw)",
			minWidth: "min(20rem,100vw)",
		}}
		className={`${classNames} flex-1 m-1 rounded-md overflow-hidden shadow-sm border-black border`}
	>
		<img src={src} alt={title} className="w-full h-24" />
		<div className="p-2 text-light">
			<h2 className="text-md font-semibold">{title}</h2>
			<p className="text-sm pb-2">{subtitle}</p>
			<p className="text-xs pb-4">{content}</p>
			{children}
			<div className="text-center">
				<Link
					href={href}
					classNames="px-2 py-1 border border-blue-500 text-blue-500 hover:border-blue-400 hover:text-blue-400 rounded-sm"
				>
					{helper}
				</Link>
			</div>
		</div>
	</li>
);

export default Thumbnail;
