import Meta from "./meta";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
	return (
		<div className="min-h-screen dark:bg-dark text-dark dark:text-light">
			<Meta />
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
