import Link from "../text/link";

const Nav = ({ classNames, workLinks, siteLinks }) => (
	<div className={classNames}>
		<div className="p-2">
			<h2 className="text-2xl font-semibold opacity-60">Work</h2>
			<ul>
				{workLinks.map((link, i) => (
					<li key={`${link.name} - ${link.id}`}>
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
					<li key={`${link.name} - ${link.id}`}>
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
