import Head from "next/head";
import Layout from "@template/layout";
import Container from "@container/container";
import Section from "@container/section";
import Title from "@text/title";

export default function Pricing() {
	return (
		<Layout>
			<Head>
				<title>ljtech.ca</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Section>
				<div className="flex justify-center">
					<Container size="small">
						<div className="p-2">
							<Title>FAQ</Title>
						</div>
					</Container>
				</div>
			</Section>
		</Layout>
	);
}
