import { useState } from "react";
import Link from "../link";

export default function Menu({ buttonOn, buttonOff, list }) {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive((prev) => !prev);
	};

	return (
		<div className="relative top-2 w-8 h-8">
			<button className="z-50 fixed top-2" onClick={handleClick}>
				{active ? buttonOn : buttonOff}
			</button>
			{active ? (
				<ul className="border blur fixed top-10 z-50 rounded-sm">
					{list.map((item, i) => (
						<li key={i}>
							<Link classNames="p-2 grid hover:bg-gray-200 text-dark" href={item}>
								{item}
							</Link>
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
}
