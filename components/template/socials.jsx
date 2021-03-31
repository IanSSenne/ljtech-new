import { socials } from "@lib/content";
import Link from "@text/link";

export default function Socials() {
	return (
		<div className="text-right font-semibold p-2">
			<h2 className="text-2xl opacity-60">Get in touch</h2>
			<p>Questions or feedback?</p>
			<Link classNames="pb-2 hover:opacity-60 font-semibold" href="/contact">
				<p>I would love to hear from you</p>
			</Link>
			<div className="flex content-center items-center justify-center">
				{socials.map((social, i) => (
					<Link
						key={`${social.name} - ${social.id}`}
						target="_blank"
						classNames="hover:opacity-60"
						href={social.href}
					>
						{social.icon}
					</Link>
				))}
			</div>
		</div>
	);
}
