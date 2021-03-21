import Head from "next/head";
import Layout from "../components/template/layout";
import Rubrik from "../components/rubrik";
import Services from "../components/services";
import Section from "../components/section";
import Container from "../components/container";

export default function Pricing() {
	return (
		<Layout>
			<Head>
				<title>ljtech.ca</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Section dark={true}>
				<div className="flex justify-center">
					<div>
						<h1 className="text-3xl text-center font-black p-2">
							Plans &amp; Pricing
						</h1>
						<Rubrik />
					</div>
				</div>
			</Section>
			<Section>
				<Container size="small" classNames="px-2">
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
				</Container>
			</Section>
		</Layout>
	);
}
