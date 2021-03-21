import Head from "next/head";
import Layout from "../components/template/layout";
import Thumbnail from "../components/thumbnail";
import { getSortedPostsData } from "../lib/posts";
import Section from "../components/section";
import Container from "../components/container";

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
							<h1 className="text-3xl text-center font-black p-2">Blog</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
								earum repellat dolor temporibus minima optio harum nam facilis
								nobis laborum atque quis explicabo in veritatis quos fugiat
								quod, sequi ipsam aliquam perferendis facere accusantium? Quis
								quos reiciendis doloremque aliquam quidem?
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
