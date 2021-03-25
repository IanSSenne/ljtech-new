import Head from "next/head";
import Layout from "@template/layout";
import { Container, Rubrik, Services, Section } from "@container/all";
import { Title } from "@text/all";

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
						<Title>Plans &amp; Pricing</Title>
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
							Learn more about what each service entails in the chart below.
						</p>
					</div>
					<Services />
				</Container>
			</Section>
		</Layout>
	);
}
