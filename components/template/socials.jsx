import { Social } from "../svg/all";
import Link from "../text/link";

const socialLinks = [
	{
		id: 0,
		name: "Facebook",
		href: "https://www.facebook.com/ljtechdotca",
		icon: <Social type="facebook" width={38} height={38} />,
	},
	{
		id: 1,
		name: "Github",
		href: "https://github.com/landonjohnsontechnologies",
		icon: <Social type="github" width={38} height={38} />,
	},
	{
		id: 2,
		name: "Linkedin",
		href: "https://www.linkedin.com/in/ljtechnology/",
		icon: <Social type="linkedin" width={38} height={38} />,
	},
	{
		id: 3,
		name: "Twitch",
		href: "https://www.twitch.tv/ljtechdotca",
		icon: <Social type="twitch" width={38} height={38} />,
	},
	{
		id: 4,
		name: "Twitter",
		href: "https://twitter.com/ljtechnology",
		icon: <Social type="twitter" width={38} height={38} />,
	},
];

export default function Socials() {
	return (
		<div className="text-right p-2">
			<h2 className="text-2xl font-semibold opacity-60">Get in touch</h2>
			<p>Questions or feedback?</p>
			<p className="pb-2">I would love to hear from you</p>
			<div className="flex content-center items-center justify-center">
				{socialLinks.map((social, i) => (
					<Link
						key={`${social.name} - ${social.id}`}
						target="_blank"
						classNames="hover:opacity-80 transition"
						href={socialLinks[i].href}
					>
						{social.icon}
					</Link>
				))}
			</div>
		</div>
	);
}
