import { NextSeo } from "next-seo";

const Meta = () => (
	<NextSeo
		title="ljtech.ca"
		description="This will be description content"
		openGraph={{
			url: "https://ljtech.ca",
			title: "ljtech.ca",
			description: "ljtech.ca",
			images: [
				{
					url: "img1",
					width: 800,
					height: 600,
					alt: "ljtech.ca image 1",
				},
				{
					url: "img2",
					width: 900,
					height: 800,
					alt: "ljtech.ca image 2",
				},
				{ url: "img1" },
				{ url: "img2" },
			],
			site_name: "ljtech.ca",
		}}
		twitter={{
			site: "@ljtech.ca",
			cardType: "summary_large_image",
		}}
	/>
);

export default Meta;
