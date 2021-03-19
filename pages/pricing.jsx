import Head from "next/head";
import Layout from "../components/template/layout";
import Rubrik from "../components/rubrik";
import Services from "../components/services";

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
						<h1 className="text-3xl text-center font-black p-2">
							Plans &amp; Pricing
						</h1>
						<Rubrik />
					</div>
				</div>
			</section>
			<section className="py-8 sm:py-12 md:py-16">
				<div className="max-w-lg mx-auto px-2 ">
					<div className="pb-8">
						<h2 className="text-2xl text-center font-black p-2">
							What does this all mean?
						</h2>
						<p className="text-justify md:text-left">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Accusamus facere adipisci fuga neque quae eligendi laborum ad
							vitae eos. Beatae quibusdam.
						</p>
					</div>
					<Services />
				</div>
			</section>
		</Layout>
	);
}
