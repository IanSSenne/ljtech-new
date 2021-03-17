import Head from "next/head";
import Layout from "../components/template/layout";

export default function Pricing() {
	return (
		<Layout>
			<Head>
				<title>ljtech.ca</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section className="bg-dark dark:bg-light text-light dark:text-dark py-8 sm:py-12 md:py-16">
				<div className="flex justify-center">
					<div>
						<h1 className="text-3xl text-center font-black p-2">Blog</h1>
					</div>
				</div>
			</section>
			<section className="py-8 sm:py-12 md:py-16"></section>
		</Layout>
	);
}
