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
					url: "https://test-jade-eight-97.vercel.app/800x600.png",
					width: 800,
					height: 600,
					alt: "800x600 - ljtech.ca",
				},
				{
					url: "https://test-jade-eight-97.vercel.app/900x800.png",
					width: 900,
					height: 800,
					alt: "900x800 - ljtech.ca",
				},
				{ url: "https://test-jade-eight-97.vercel.app/800x600.png" },
				{ url: "https://test-jade-eight-97.vercel.app/900x800.png" },
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
