import { Router, useRouter } from "next/router";
import Link from "@text/link";

export default function Menu({ active, handleClick, pages }) {
	return (
		<div>
			<button
				onClick={handleClick}
				className="border z-50 top-3.5 blur flex content-center items-center justify-center w-6 h-6 rounded-sm"
			>
				{!active && (
					<div>
						<span className="bg-dark rounded-sm w-3.5 h-0.5 block m-0.5"></span>
						<span className="bg-dark rounded-sm w-3.5 h-0.5 block m-0.5"></span>
						<span className="bg-dark rounded-sm w-3.5 h-0.5 block m-0.5"></span>
					</div>
				)}
				{active && (
					<div>
						<span className="bg-dark rounded-sm w-3.5 h-0.5 block transform rotate-45 relative top-0.5"></span>
						<span className="bg-dark rounded-sm w-3.5 h-0.5 block transform -rotate-45 relative top-0 mb-0.5"></span>
					</div>
				)}
			</button>
			{active && (
				<ul
					style={{ height: "calc(100vh - 48px)", maxHeight: "14.125rem" }}
					className="overflow-hidden overflow-y-scroll border rounded-sm blur fixed z-50 top-10"
				>
					{pages.map((link, i) => (
						<li key={link.name}>
							<Link
								href={link.href}
								classNames={
									useRouter().pathname === link.href
										? "text-blue-500 grid px-2 py-1 bg-gray-200"
										: "text-dark grid px-2 py-1 hover:bg-gray-50"
								}
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
