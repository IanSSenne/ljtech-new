import { socials } from "@lib/content";
import Link from "@text/link";

export default function Socials() {
	return (
		<div className="text-right p-2">
			<h2 className="text-2xl font-semibold opacity-60">Get in touch</h2>
			<p>Questions or feedback?</p>
			<p className="pb-2">I would love to hear from you</p>
			<div className="flex content-center items-center justify-center">
				{socials.map((social, i) => (
					<Link
						key={`${social.name} - ${social.id}`}
						target="_blank"
						classNames="hover:opacity-80 transition"
						href={social.href}
					>
						{social.icon}
					</Link>
				))}
			</div>
		</div>
	);
}
