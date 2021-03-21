import Link from "../link";
import Logo from "../logo";
import Menu from "./menu";
import Theme from "../theme";

// is passed into the menu component for href links
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
		extraNames="blur"
		classNames="rounded-sm"
		src="./ljtech-g.svg"
		width={25}
		height={25}
	/>
);
const purple = (
	<Logo
		type="purple"
		extraNames="blur"
		classNames="rounded-sm"
		src="./ljtech-g.svg"
		width={25}
		height={25}
	/>
);

const Header = () => (
	<header className="max-w-6xl mx-auto flex items-center justify-between p-2">
		<div className="flex items-center space-x-2">
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
