import Link from "./link";

const Thumbnail = ({ classNames, href }) => (
	<li
		style={{
			backgroundColor: "#363739",
			maxWidth: "min(20rem,100vw)",
		}}
		className={`${classNames} m-1 rounded-md overflow-hidden shadow-sm border-black border`}
	>
		<img src="" alt="" className="w-full h-24" />
		<div className="p-2 text-light">
			<h2 className="text-md font-semibold">Name Test</h2>
			<p className="text-sm pb-2">BY BLARGH</p>
			<p className="text-xs pb-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus
				minima repellat quod fugit.
			</p>
			<div className="text-center">
				<Link
					href={href}
					classNames="px-2 py-1 border border-blue-500 text-blue-500 hover:border-blue-400 hover:text-blue-400 rounded-sm"
				>
					View
				</Link>
			</div>
		</div>
	</li>
);

export default Thumbnail;
