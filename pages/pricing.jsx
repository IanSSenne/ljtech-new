import Head from "next/head";
import Layout from "@template/layout";
import Container from "@container/container";
import Section from "@container/section";
import Rubrik from "@container/rubrik";
import Services from "@container/services";
import Title from "@text/title";

const services = [
	{
		id: "darkmode",
		name: "Dark Mode",
		description:
			"Dark mode is an option that allows users to change an interfaces color scheme. Dark mode will typically change light backgrounds to dark and dark text to a light. With further customization this can result in multiple different themed interface options.",
	},
	{
		name: "SSL Certificate",
		id: "ssl",
		description:
			"SSL is an acronym for Secure Sockets Layer. SSL Certificates will enable a safe connections to your websites. This is necessary for online commerce and websites that require you to submit other personal information.",
	},
	{
		id: "hosting",
		name: "Web Hosting",
		description:
			"Web hosting with ljtech includes everything from domain registration to securing a 24/7 live website.",
	},
	{
		id: "analytics",
		name: "Analytic Reports",
		description:
			"Learn more about your websites performance and user interactions through monthly analytic reports.",
	},
	{
		id: "seo",
		name: "Increased SEO",
		description:
			"With more details on your business and website performance, ljtech can work towards increasing its lead generation with target demographics.",
	},
	{
		id: "cms",
		name: "CMS Capability",
		description:
			"CMS stands for content management system. A CMS will allow a client to add content to their own website with the use of an authentication system. This is can be used for things such as blogs or e-commerce websites.",
	},
];

export default function Pricing() {
	return (
		<Layout>
			<Head>
				<title>ljtech.ca</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Section dark={true}>
				<div className="flex justify-center">
					<div>
						<Title>Plans &amp; Pricing</Title>
						<Rubrik />
					</div>
				</div>
			</Section>
			<Section>
				<Container size="small" classNames="px-2">
					<div className="pb-8">
						<h2 className="text-2xl text-center font-black p-2">
							What does this all mean?
						</h2>
						<p className="text-justify md:text-left">
							Learn more about what each service entails in the chart below.
						</p>
					</div>
					<Services services={services} />
				</Container>
			</Section>
		</Layout>
	);
}
