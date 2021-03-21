import Container from "../components/container";
import Head from "next/head";
import Layout from "../components/template/layout";
import Section from "../components/section";
import Title from "../components/title";

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
							<Title>About</Title>
						</div>
					</Container>
				</div>
			</Section>
		</Layout>
	);
}
