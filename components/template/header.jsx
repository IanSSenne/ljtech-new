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
		<header className="max-w-6xl mx-auto flex items-center justify-between p-2">
			<div className="flex items-center space-x-2">
				<Menu active={active} handleClick={handleClick} pages={pages} />
				<div className="w-4 h-6 block"></div>
				<Logo type="disco" width={25} height={25} />
				<Link
					href="/about"
					classNames="hover:border-green-500 hover:text-green-500"
				>
					Why ljtech?
				</Link>
			</div>
			<div className="flex items-center space-x-2">
				<Theme />
				<Link
					href="/contact"
					classNames="px-2 py-1 border rounded-sm hover:border-purple-500 hover:text-purple-500"
				>
					Contact
				</Link>
			</div>
		</header>
	);
}
