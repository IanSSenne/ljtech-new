import Link from "../link";
import Logo from "../logo";
import Theme from "../theme";
import Menu from "./menu";

const list = ["Home", "About"];
const testing1 = (
	<Logo
		type="green"
		extraNames="blur"
		classNames="rounded-sm"
		src="./ljtech-g.svg"
		width={25}
		height={25}
	/>
);
const testing2 = (
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
			<Menu buttonOn={testing1} buttonOff={testing2} list={list} />
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
