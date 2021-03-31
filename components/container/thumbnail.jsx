import Link from "@text/link";

const Thumbnail = ({
	content,
	children,
	classNames,
	date,
	helper,
	href,
	src,
	subtitle,
	title,
}) => (
	<li
		style={{
			backgroundColor: "#363739",
		}}
		className={`${
			classNames ?? ""
		} grid flex-1 m-1 rounded-md overflow-hidden shadow-sm border-black border`}
	>
		<img
			src={src}
			alt={title}
			className="w-full h-24 object-cover fade-in"
			draggable={false}
		/>
		<div className="grid p-2 md:px-4 text-light">
			{title ? <h2 className="text-md font-semibold pb-3">{title}</h2> : null}
			{date ? <p className="text-sm pb-2">{date}</p> : null}
			{subtitle ? <p className="text-sm pb-2">{subtitle}</p> : null}
			{content ? <p className="text-xs pb-4">{content}</p> : null}
			{children}
			<div className="text-center pb-4 place-self-end w-full">
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
