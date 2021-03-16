import Copyright from "./copyright";
import Nav from "./nav";
import Socials from "./socials";

export default function Footer() {
	return (
		<footer className="max-w-6xl mx-auto lg:flex lg:items-center lg:justify-between p-2">
			<Nav classNames="flex justify-around space-x-4 mb-8 lg:mb-0 lg:hidden" />
			<div className="w-full flex flex-wrap items-end justify-around sm:justify-between">
				<div className="flex items-end space-x-4">
					<Copyright />
					<Nav classNames="hidden lg:flex" />
				</div>
				<Socials />
			</div>
		</footer>
	);
}
