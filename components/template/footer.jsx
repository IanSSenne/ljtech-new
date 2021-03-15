import Link from "../link";
import Logo from "../logo";
import Facebook from "../social/facebook";
import Github from "../social/github";
import Linkedin from "../social/linkedin";
import Twitch from "../social/twitch";
import Twitter from "../social/twitter";

export default function Footer() {
	const workLinks = [
		{
			id: 1,
			name: "Plans & Pricing",
			href: "/plans",
		},
		{
			id: 2,
			name: "Professional Work",
			href: "/work",
		},
		{
			id: 3,
			name: "Art",
			href: "/art",
		},
		{
			id: 4,
			name: "Apps",
			href: "/apps",
		},
		{
			id: 5,
			name: "Games",
			href: "/games",
		},
	];

	const siteLinks = [
		{
			id: 6,
			name: "About",
			href: "/",
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

	const socialLinks = [
		{
			id: 11,
			name: "Facebook",
			image: <Facebook />,
			href: "https://facebook.com",
		},
		{
			id: 12,
			name: "Github",
			image: <Github />,
			href: "https://github.com",
		},
		{
			id: 13,
			name: "Linkedin",
			image: <Linkedin />,
			href: "https://linkedin.com",
		},
		{
			id: 14,
			name: "Twitch",
			image: <Twitch />,
			href: "https://twitch.com",
		},
		{
			id: 15,
			name: "Twitter",
			image: <Twitter />,
			href: "https://twitter.com",
		},
	];
	return (
		<footer className="flex content-center items-start justify-around p-2 md:pb-8">
			<div className="flex space-x-4">
				<div className="p-2">
					<div>
						<Link href="/" classNames="text-2xl hover:opacity-60">
							<Logo
								classNames="flex content-center items-center justify-center"
								src="./ljtech-g.svg"
								width={25}
								height={25}
							>
								ljtech
							</Logo>
						</Link>
					</div>
					<div className="px-2 py-1 font-semibold flex content-center items-center justify-start">
						<p>©{new Date().getFullYear()} powered by ☕</p>
					</div>
					<div>
						<Link classNames="hover:text-purple-500" href="/tos">
							Terms of Service
						</Link>
						|
						<Link classNames="hover:text-purple-500" href="/policy">
							Privacy Policy
						</Link>
					</div>
				</div>
				<div className="flex">
					<div className="p-2">
						<h2 className="text-2xl font-semibold opacity-50">Work</h2>
						<ul>
							{workLinks.map((link, i) => (
								<li key={link.id}>
									<Link classNames="hover:text-blue-500" href={link.href}>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="p-2">
						<h2 className="text-2xl font-semibold opacity-50">About</h2>
						<ul>
							{siteLinks.map((link, i) => (
								<li key={link.id}>
									<Link classNames="hover:text-blue-500" href={link.href}>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="p-2">
				<h2 className="text-2xl font-semibold opacity-50">Get in touch</h2>
				<p className="p-2">Questions or feedback?</p>
				<p className="p-2">I would love to hear from you</p>
				<div className="flex">
					{socialLinks.map((link, i) => (
						<div key={link.id}>
							<Link classNames="hover:opacity-80" href={link.href}>
								{link.image}
							</Link>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
}
