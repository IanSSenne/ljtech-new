import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
	return (
		<Layout>
			{/* landing */}
			<section>
				<div
					style={{ minHeight: "calc(100vh - 8rem)" }}
					className="flex content-center items-center justify-center"
				>
					<div style={{ maxWidth: "43rem" }} className="p-2">
						<h1 className="w-full font-black text-7xl p-2 mb-4">
							Need a website for your business?
						</h1>
						<p className="text-3xl p-2">
							Build, develop and maintain your business online with a beautiful
							website from <span className="font-semibold">ljtech</span>. No
							shortcuts will be taken - 100% custom-made with direct webmaster
							support.
						</p>
					</div>
					<div className="p-2">
						<img
							className="dark:hidden p-2"
							src="./clip/bubbles-dark.svg"
							alt="bubbles-dark"
						/>
						<img
							className="hidden dark:block p-2"
							src="./clip/bubbles-light.svg"
							alt="bubbles-light"
						/>
					</div>
				</div>
				<div>
					<img
						className="dark:hidden"
						src="./clip/header-dark.svg"
						alt="header-dark"
					/>
					<img
						className="hidden dark:block"
						src="./clip/header-light.svg"
						alt="header-light"
					/>
				</div>
			</section>
			<section className="bg-dark dark:bg-light h-80"></section>
		</Layout>
	);
}
