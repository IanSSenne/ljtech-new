export default function Block({ reverse, children, src, set, alt }) {
	if (reverse === true) {
		return (
			<div className="flex justify-center flex-wrap flex-row-reverse md:text-right p-2">
				<p className="md:flex-1 pb-4 md:pb-0 max-w-lg pl-2">{children}</p>
				<picture className="fade-in flex">
					<source media="(min-width:768px)" srcSet={set} />
					<img
						className="w-full md:w-24 border rounded-sm object-cover"
						src={src}
						alt={alt}
						width="100"
						height="100"
						draggable={false}
					/>
				</picture>
			</div>
		);
	} else {
		return (
			<div className="flex justify-center flex-wrap p-2">
				<p className="md:flex-1 pb-4 md:pb-0 max-w-lg pr-2">{children}</p>
				<picture className="fade-in flex">
					<source media="(min-width:768px)" srcSet={set} />
					<img
						className="w-full md:w-24 border rounded-sm object-cover"
						src={src}
						alt={alt}
						width="100"
						height="100"
						draggable={false}
					/>
				</picture>
			</div>
		);
	}
}
