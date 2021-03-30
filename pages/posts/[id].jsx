import { getAllPostIds, getPostData } from "@lib/posts";
import Layout from "@template/layout";
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
			<div className={styles.post}>
				{postData.title}
				<br />
				{postData.id}
				<br />
				{postData.date}
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
			</div>
		</Layout>
	);
}
