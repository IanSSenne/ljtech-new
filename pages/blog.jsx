import { getSortedPostsData } from "@lib/posts";
import Head from "next/head";
import Layout from "@template/layout";
import Container from "@container/container";
import Section from "@container/section";
import Thumbnail from "@container/thumbnail";
import Title from "@text/title";
import Link from "@text/link";

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
				<Container>
					<div className="p-2">
						<Title>Blog</Title>
						<div className="p-2 max-w-sm md:max-w-lg lg:max-w-3xl mx-auto">
							<h2 className="font-bold pb-4 text-center md:text-left">
								Welcome to the blog
							</h2>
							<p className="pb-2">
								Here are my thoughts on coding and web design.
							</p>
							<p className="pb-4">
								If you want, you can follow me on{" "}
								<Link
									classNames="text-blue-500 hover:text-blue-400 transition"
									href="https://github.com/landonjohnsontechnologies"
									target="_blank"
								>
									Github
								</Link>{" "}
								for updates
							</p>
						</div>
					</div>
					<ol className="grid md:grid-cols-3">
						{allPostsData.map(({ id, date, title, src }) => (
							<Thumbnail
								key={id}
								helper={`Read`}
								href={`/posts/${id}`}
								title={title}
								date={date}
								src={src}
							/>
						))}
					</ol>
				</Container>
			</Section>
		</Layout>
	);
}
