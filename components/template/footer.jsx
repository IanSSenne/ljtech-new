import { work, about } from "@lib/content";
import Copyright from "./copyright";
import Navlist from "./navlist";
import Socials from "./socials";

export default function Footer() {
	return (
		<footer className="max-w-6xl mx-auto lg:flex lg:items-center lg:justify-between p-2">
			<Navlist
				work={work}
				about={about}
				classNames="flex justify-around space-x-4 my-8 lg:mb-0 lg:hidden"
			/>
			<div className="w-full flex flex-wrap items-end justify-around sm:justify-between">
				<div className="flex items-end space-x-4">
					<Copyright />
					<Navlist
						work={work}
						about={about}
						classNames="hidden lg:flex space-x-4"
					/>
				</div>
				<Socials />
			</div>
		</footer>
	);
}
