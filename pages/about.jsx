import Head from "next/head";
import Layout from "@template/layout";
import { Container, Section } from "@container/all";
import { Title } from "@text/all";

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
