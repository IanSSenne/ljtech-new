import Link from "../link";

const workLinks = [
	{
		id: 1,
		name: "Plans & Pricing",
		href: "/pricing",
	},
	{
		id: 2,
		name: "Apps",
		href: "/portfolio#apps",
	},
	{
		id: 3,
		name: "Art",
		href: "/portfolio#art",
	},
	{
		id: 4,
		name: "Components",
		href: "/portfolio#components",
	},
	{
		id: 5,
		name: "Games",
		href: "/portfolio#games",
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

const Nav = ({ classNames }) => (
	<div className={classNames}>
		<div className="p-2">
			<h2 className="text-2xl font-semibold opacity-60">Work</h2>
			<ul>
				{workLinks.map((link, i) => (
					<li key={link.id}>
						<Link classNames="transition hover:text-blue-500" href={link.href}>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
		<div className="p-2">
			<h2 className="text-2xl font-semibold opacity-60">About</h2>
			<ul>
				{siteLinks.map((link, i) => (
					<li key={link.id}>
						<Link classNames="transition hover:text-blue-500" href={link.href}>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default Nav;
