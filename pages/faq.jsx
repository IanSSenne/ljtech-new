import Head from "next/head";
import Layout from "../components/template/layout";
import Section from "../components/section";

export default function Pricing() {
	return (
		<Layout>
			<Head>
				<title>ljtech.ca</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Section>
				<div className="flex justify-center">
					<div>
						<h1 className="text-3xl text-center font-black p-2">FAQ</h1>
					</div>
				</div>
			</Section>
		</Layout>
	);
}
