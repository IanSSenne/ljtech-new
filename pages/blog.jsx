import { getSortedPostsData } from "../lib/posts";
import Head from "next/head";
import Layout from "@template/layout";
import Container from "@container/container";
import Section from "@container/section";
import Thumbnail from "@container/thumbnail";
import Title from "@text/title";

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
					<Container>
						<div className="p-2">
							<Title>Blog</Title>
							<div className="flex justify-center">
								<p>
									Welcome to the ljtech blog, here I will post my thoughts on
									coding and web design.
								</p>
							</div>
						</div>
						<ol className="flex flex-wrap justify-center">
							{allPostsData.map(({ id, date, title }) => (
								<Thumbnail
									key={id}
									helper={`Read`}
									href={`/posts/${id}`}
									title={title}
									date={date}
								/>
							))}
						</ol>
					</Container>
				</div>
			</Section>
		</Layout>
	);
}
