import Container from "@container/container";
import Link from "@text/link";
import Love from "@svg/love";

export default function Action({ call, children, href, title }) {
	return (
		<div className="flex justify-center">
			<Container size="small">
				<div className="p-2 text-center max-w-xs mx-auto">
					<div className="pb-2 flex justify-center">
						<Love type="heart" width={100} height={100} />
					</div>
					<h2 className="text-sm sm:text-xl">{title}</h2>
					<p className="text-xs sm:text-base">
						<Link
							classNames="text-blue-500 hover:underline"
							href={href}
							target="_blank"
						>
							{call}
						</Link>
						<span className="opacity-50"> {children}</span>
					</p>
				</div>
			</Container>
		</div>
	);
}
