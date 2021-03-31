import { useState } from "react";
import { pages } from "@lib/content";
import Link from "@text/link";
import Logo from "@svg/logo";
import Menu from "@button/menu";
import Theme from "@button/theme";

export default function Header() {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive((prev) => !prev);
	};

	return (
		<header className="sticky z-50 top-0 p-2">
			<div className="max-w-6xl mx-auto flex items-center justify-between">
				<div className="flex items-center space-x-2">
					<Menu active={active} handleClick={handleClick} pages={pages} />
					<Link href="/">
						<Logo type="disco" width={25} height={25} />
					</Link>
					<Link
						href="/about"
						classNames="hidden sm:block border text-dark blur px-2 rounded-full hover:text-green-500 hover:border-green-500"
					>
						Why ljtech?
					</Link>
				</div>
				<div className="flex items-center space-x-2">
					<Theme />
					<Link
						href="/contact"
						classNames="border text-dark blur fade-in px-2 py-1 rounded-sm hover:text-blue-500 hover:border-blue-500"
					>
						Contact
					</Link>
				</div>
			</div>
		</header>
	);
}
