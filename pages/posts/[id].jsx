import { getAllPostIds, getPostData } from "@lib/posts";
import { socials } from "@lib/content";
import Action from "@container/action";
import Head from "next/head";
import Layout from "@template/layout";
import Container from "@container/container";
import Section from "@container/section";
import Title from "@text/title";

import styles from "@styles/post.module.css";

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}
export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export default function Post({ postData }) {
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
							<Title>{postData.title}</Title>
							<div className="p-2">
								<img
									className="border object-cover h-24 rounded-md overflow-hidden"
									src="../800x600.png"
									alt="something"
									width="100%"
									height="100"
									draggable={false}
								/>
							</div>
							<div className="flex px-2 opacity-60">
								<p className="flex-1">{postData.date}</p>
								<p className="flex-1 text-center">{postData.id}</p>
								<p className="flex-1 text-right">{postData.author}</p>
							</div>
							<div
								className={styles.post}
								dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
							></div>
						</div>
					</Container>
				</div>
			</Section>
			<Section dark={true}>
				<Action
					href={socials[3].href}
					title="Want more ljtech content?"
					call="Follow me"
				>
					on Twitch and AMA
				</Action>
			</Section>
		</Layout>
	);
}
