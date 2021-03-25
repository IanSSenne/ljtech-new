import { getSortedPostsData } from "../lib/posts";
import Head from "next/head";
import Layout from "@template/layout";
import { Container, Section, Thumbnail } from "@container/all";
import { Title } from "@text/all";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Pricing({ allPostsData }) {
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
							<Title>Blog</Title>
							<p>
								Welcome to the ljtech blog, here I will post my thoughts on
								coding and web design.
							</p>
						</div>
						<ol className="flex flex-wrap justify-center">
							{allPostsData.map(({ id, date, title }) => (
								<Thumbnail key={id} helper={`Read`} href={`/posts/${id}`}>
									<div>{title}</div>
									<p>{date}</p>
								</Thumbnail>
							))}
						</ol>
					</Container>
				</div>
			</Section>
		</Layout>
	);
}
