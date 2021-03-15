import Link from "../link";
import Logo from "../logo";
import Theme from "../theme";

const Header = () => (
	<header className="flex items-center justify-around p-2">
		<div className="flex items-center space-x-2">
			<Link href="/" classNames="hover:opacity-60">
				<Logo src="./ljtech-g.svg" width={25} height={25} />
			</Link>
			<Link
				href="/why"
				classNames="hover:border-green-500 hover:text-green-500"
			>
				Why ljtech?
			</Link>
		</div>
		<div className="flex items-center space-x-2">
			<Theme />
			<Link
				href="/contact"
				classNames="border rounded-sm hover:border-purple-500 hover:text-purple-500"
			>
				Contact
			</Link>
		</div>
	</header>
);

export default Header;
