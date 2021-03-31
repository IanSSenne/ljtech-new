import Head from "next/head";
import Layout from "@template/layout";
import Container from "@container/container";
import Query from "@container/query";
import Section from "@container/section";
import Title from "@text/title";

const questions = [
	{
		question: "Is water wet?",
		answer: "Yes water is wet if its liquid I think otherwise I'm not sure",
	},
	{
		question: "What is the meaning of life?",
		answer: "Yes water is wet if its liquid I think otherwise I'm not sure",
	},
	{
		question: "How long is a piece of string?",
		answer: "Yes water is wet if its liquid I think otherwise I'm not sure",
	},
	{
		question: "Is water wet?",
		answer: "Yes water is wet if its liquid I think otherwise I'm not sure",
	},
];

export default function Pricing() {
	return (
		<Layout>
			<Head>
				<title>ljtech.ca</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Section>
				<div className="flex justify-center">
					<Container>
						<div className="p-2">
							<Title>FAQ</Title>
							<Query questions={questions} />
						</div>
					</Container>
				</div>
			</Section>
		</Layout>
	);
}
