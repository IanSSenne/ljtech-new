import Copyright from "./copyright";
import Navlist from "./navlist";
import Socials from "./socials";

const workLinks = [
	{
		id: 1,
		name: "Plans & Pricing",
		href: "/pricing",
	},
	{
		id: 2,
		name: "Apps",
		href: "/portfolio",
	},
	{
		id: 3,
		name: "Art",
		href: "/portfolio",
	},
	{
		id: 4,
		name: "Components",
		href: "/portfolio",
	},
	{
		id: 5,
		name: "Games",
		href: "/portfolio",
	},
];

const siteLinks = [
	{
		id: 6,
		name: "About",
		href: "/about",
	},
	{
		id: 7,
		name: "Blog",
		href: "/blog",
	},
	{
		id: 8,
		name: "FAQ",
		href: "/faq",
	},
	{
		id: 9,
		name: "Contact",
		href: "/contact",
	},
	{
		id: 10,
		name: "Survey",
		href: "/survey",
	},
];

export default function Footer() {
	return (
		<footer className="max-w-6xl mx-auto lg:flex lg:items-center lg:justify-between p-2">
			<Navlist
				workLinks={workLinks}
				siteLinks={siteLinks}
				classNames="flex justify-around space-x-4 mb-8 lg:mb-0 lg:hidden"
			/>
			<div className="w-full flex flex-wrap items-end justify-around sm:justify-between">
				<div className="flex items-end space-x-4">
					<Copyright />
					<Navlist
						workLinks={workLinks}
						siteLinks={siteLinks}
						classNames="hidden lg:flex space-x-4"
					/>
				</div>
				<Socials />
			</div>
		</footer>
	);
}
