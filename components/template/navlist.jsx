import { useRouter } from "next/router";
import Link from "@text/link";

const Nav = ({ classNames, work, about }) => (
	<div className={classNames}>
		<div className="p-2">
			<h2 className="text-2xl font-semibold opacity-60">Work</h2>
			<ul>
				{work.map((link, i) => (
					<li key={`${link.name}A`}>
						<Link
							classNames={
								useRouter().pathname === link.href
									? "text-blue-600 hover:opacity-50"
									: "hover:opacity-50"
							}
							href={link.href}
						>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
		<div className="p-2">
			<h2 className="text-2xl font-semibold opacity-60">About</h2>
			<ul>
				{about.map((link, i) => (
					<li key={`${link.name}B`}>
						<Link
							classNames={
								useRouter().pathname === link.href
									? "text-blue-600 hover:opacity-50"
									: "hover:opacity-50"
							}
							href={link.href}
						>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default Nav;
