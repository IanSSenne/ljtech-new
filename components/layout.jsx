import Head from "next/head";
import Theme from "./Theme";
import Link from "next/link";

export default function Layout({ children }) {
	return (
		<div className="min-h-screen dark:bg-dark text-dark dark:text-light">
			<Head>
				<title>ljtech.ca</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className="flex justify-around items-center p-2">
				<Link href="/why">
					<a className="font-semibold hover:text-purple-500">Why ljtech?</a>
				</Link>
				<Theme />
				<Link href="/contact">
					<a className="border rounded-sm hover:border-purple-500 hover:text-purple-500 px-2 py-1">
						Contact
					</a>
				</Link>
			</header>
			<main>{children}</main>
			{/* <footer>footer</footer> */}
		</div>
	);
}
