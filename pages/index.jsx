import Head from "next/head";
import Layout from "../components/template/layout";
import Bubbles from "../components/bubbles";
import Slides from "../components/slides";
import Plans from "../components/plans";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>ljtech.ca</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section>
				<div
					style={{ minHeight: "calc(100vh - 8rem)" }}
					className="max-w-6xl mx-auto flex items-center"
				>
					<div className="flex content-center items-center justify-between">
						<div style={{ maxWidth: "43rem" }} className="p-2">
							<h1 className="w-full font-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl p-2 mb-4">
								Need a website for your business?
							</h1>
							<p className="text-3xl p-2">
								Build, develop and maintain your business online with a
								beautiful website from{" "}
								<span className="font-semibold">ljtech</span>. No shortcuts will
								be taken - 100% custom-made with direct webmaster support.
							</p>
						</div>
						<Bubbles
							dark="./img/bubbles-dark.svg"
							light="./img/bubbles-light.svg"
						/>
					</div>
				</div>
			</section>
			<section className="bg-dark dark:bg-light text-light dark:text-dark py-8 sm:py-12 md:py-16">
				<Slides />
			</section>
			<section className="py-8 sm:py-12 md:py-16">
				<Plans />
			</section>
		</Layout>
	);
}
