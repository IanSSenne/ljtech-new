import Head from "next/head";
import { Container, Section } from "../components/container/all";
import { Title } from "../components/container/title";
import Layout from "../components/template/layout";

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
