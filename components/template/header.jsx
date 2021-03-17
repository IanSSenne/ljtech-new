import Link from "../link";
import Logo from "../logo";
import Theme from "../theme";

const Header = () => (
	<header className="max-w-6xl mx-auto flex items-center justify-between p-2">
		<div className="flex items-center space-x-2">
			<Link href="/" classNames="transition hover:opacity-60">
				<Logo type="green" src="./ljtech-g.svg" width={25} height={25} />
			</Link>
			<Link
				href="/why"
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
