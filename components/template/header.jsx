import Link from "../text/link";
import Logo from "../svg/logo";
import Menu from "./menu";
import Theme from "../button/theme";

const list = [
	"/",
	"/about",
	"/blog",
	"/contact",
	"/faq",
	"/portfolio",
	"/pricing",
	"/survey",
];

const green = (
	<Logo
		type="green"
		style={{ margin: ".25rem" }}
		classNames="rounded-sm"
		src="./ljtech-g.svg"
		width={25}
		height={25}
	/>
);
const purple = (
	<Logo
		type="purple"
		style={{ margin: ".25rem" }}
		classNames="rounded-sm"
		src="./ljtech-g.svg"
		width={25}
		height={25}
	/>
);

const Header = () => (
	<header className="max-w-6xl mx-auto flex items-center justify-between p-2">
		<div className="flex items-center space-x-4">
			<Menu buttonOn={green} buttonOff={purple} list={list} />
			<Link
				href="/about"
				classNames="transition hover:border-green-500 hover:text-green-500"
			>
				Why ljtech?
			</Link>
		</div>
		<div className="flex items-center space-x-2">
			<Theme />
			<Link
				href="/contact"
				classNames="transition px-2 py-1 border rounded-sm hover:border-purple-500 hover:text-purple-500"
			>
				Contact
			</Link>
		</div>
	</header>
);

export default Header;
