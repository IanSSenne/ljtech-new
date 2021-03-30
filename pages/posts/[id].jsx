import { getAllPostIds, getPostData } from "@lib/posts";
import Head from "next/head";
import Layout from "@template/layout";
import Container from "@container/container";
import Section from "@container/section";
import Title from "@text/title";
import Link from "@text/link";
import Love from "@svg/love";
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
								/>
							</div>
							<div className="flex px-2 opacity-50">
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
				<div className="flex justify-center">
					<Container size="small">
						<div>
							<div className="flex flex-wrap content-center items-center justify-center space-x-4 pb-4">
								<Love type="heart" width={100} height={100} />
								<p className="text-xl">Learn more about ljtech.</p>
							</div>
							<div className="text-center px-2 pt-8">
								<Link
									classNames="px-2 py-1 border border-blue-500 text-blue-500 hover:border-blue-400 hover:text-blue-400 rounded-sm"
									href="/pricing"
								>
									About Me
								</Link>
							</div>
						</div>
					</Container>
				</div>
			</Section>
		</Layout>
	);
}
