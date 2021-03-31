import Head from "next/head";
import Layout from "@template/layout";
import Container from "@container/container";
import Section from "@container/section";
import Plans from "@container/plans";
import Slideshow from "@container/slideshow";
import Clip from "@svg/clip";
import Love from "@svg/love";
import aurora from "@styles/aurora.module.css";

//todo: put this in content
const plans = [
	{
		id: 1,
		classNames: "border md:border-r-0 rounded-md md:rounded-r-none",
		color: "bg-green-500",
		name: "Basic",
		description: "For small personal websites.",
		priceMo: 50,
		priceYr: 600 * 0.8,
		offers: ["+ Dark Mode", "+ SSL Certificate", "+ Web Hosting"],
	},
	{
		id: 2,
		classNames: "border rounded-md",
		color: "bg-pink-500",
		name: "Enterprise",
		description: "For selling products online.",
		priceMo: 150,
		priceYr: 1800 * 0.8,
		offers: [
			"Dark Mode",
			"SSL Certificate",
			"Web Hosting",
			"Analytic Reports",
			"Increased SEO",
			"+ CMS Capability",
		],
	},
	{
		id: 3,
		classNames: "border md:border-l-0 rounded-md md:rounded-l-none",
		color: "bg-purple-500",
		name: "Business",
		description: "For growing businesses.",
		priceMo: 100,
		priceYr: 1200 * 0.8,
		offers: [
			"Dark Mode",
			"SSL Certificate",
			"Web Hosting",
			"+ Analytic Reports",
			"+ Increased SEO",
		],
	},
];

//todo: get this in content?
const slides = [
	{
		id: 1,
		name: "Consultation",
		image: "green",
		description:
			"Consult with the web developer directly and define your project goals and how ljtech can meet them.",
	},
	{
		id: 2,
		name: "Rough Draft",
		image: "purple",
		description:
			"Creating mockups to illustrate a finished project, this will help ljtech find the right look for your project.",
	},
	{
		id: 3,
		name: "Writing Code",
		image: "red",
		description:
			"Writing the code that powers your application, depending on the scope of work, this may take a while.",
	},
	{
		id: 4,
		name: "Test Launch",
		image: "green",
		description:
			"Launching a working version of your project as soon as possible and working out the flaws in its design.",
	},
	{
		id: 5,
		name: "Analytics",
		image: "purple",
		description:
			"Monitoring your projects live performance and monthly usage, making sure its working as intended.",
	},
	{
		id: 6,
		name: "Optimization",
		image: "red",
		description:
			"With information collected through analytics and personal use, ljtech can finely tune your application.",
	},
];

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>ljtech.ca</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section>
				<div style={{ minHeight: "calc(100vh - 6rem)" }} className="grid">
					<Love
						classNames="flex content-center items-center justify-center lg:hidden"
						width="min(100% ,calc(50vw - 10%))"
						height="min(22vw, 50vw)"
					/>
					<div className="max-w-6xl mx-auto flex items-center">
						<div className="flex content-center items-center justify-between">
							<div style={{ maxWidth: "43rem" }} className="p-2">
								<h1 className="w-full font-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl p-2 mb-4">
									Need a website for your business?
								</h1>
								<p className="text-xl sm:text-2xl md:text-3xl px-2 pt-2 pb-12 lg:py-2">
									Build, develop and maintain your business online with a
									beautiful website from{" "}
									<span className={aurora.aurora}>ljtech</span>. No shortcuts
									will be taken - 100% custom-made with direct webmaster
									support.
								</p>
							</div>
							<Love
								classNames="p-2 hidden lg:block"
								width="calc(25vw - 10%)"
								height="calc(25vw - 10%)"
							/>
						</div>
					</div>
					<Clip classNames="w-full place-self-end" width="100%" height="100%" />
				</div>
			</section>
			<Section dark={true}>
				<div className="flex justify-center">
					<Container size="small">
						<Slideshow slides={slides} />
					</Container>
				</div>
			</Section>
			<Section>
				<div className="flex justify-center">
					<Container size="small">
						<Plans plans={plans} />
					</Container>
				</div>
			</Section>
		</Layout>
	);
}
