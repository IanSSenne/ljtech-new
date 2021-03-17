import Facebook from "../social/facebook";
import Github from "../social/github";
import Linkedin from "../social/linkedin";
import Twitch from "../social/twitch";
import Twitter from "../social/twitter";
import Link from "../link";

const socialLinks = [
	{
		id: 11,
		name: "Facebook",
		href: "https://www.facebook.com/ljtechdotca",
	},
	{
		id: 12,
		name: "Github",
		href: "https://github.com/landonjohnsontechnologies",
	},
	{
		id: 13,
		name: "Linkedin",
		href: "https://www.linkedin.com/in/ljtechnology/",
	},
	{
		id: 14,
		name: "Twitch",
		href: "https://www.twitch.tv/ljtechdotca",
	},
	{
		id: 14,
		name: "Twitter",
		href: "https://twitter.com/ljtechnology",
	},
];

const Socials = () => (
	<div className="text-right p-2">
		<h2 className="text-2xl font-semibold opacity-60">Get in touch</h2>
		<p>Questions or feedback?</p>
		<p className="pb-2">I would love to hear from you</p>
		<div className="flex content-center items-center justify-center">
			<Link
				target="_blank"
				classNames="hover:opacity-80 transition"
				href={socialLinks[0].href}
			>
				<Facebook fill="#fcfcfc" width={38} height={38} />
			</Link>
			<Link
				target="_blank"
				classNames="hover:opacity-80 transition"
				href={socialLinks[1].href}
			>
				<Github fill="#fcfcfc" width={38} height={38} />
			</Link>
			<Link
				target="_blank"
				classNames="hover:opacity-80 transition"
				href={socialLinks[2].href}
			>
				<Linkedin fill="#fcfcfc" width={38} height={38} />
			</Link>
			<Link
				target="_blank"
				classNames="hover:opacity-80 transition"
				href={socialLinks[3].href}
			>
				<Twitch fill="#fcfcfc" width={38} height={38} />
			</Link>
			<Link
				target="_blank"
				classNames="hover:opacity-80 transition"
				href={socialLinks[4].href}
			>
				<Twitter fill="#fcfcfc" width={38} height={38} />
			</Link>
		</div>
	</div>
);

export default Socials;
