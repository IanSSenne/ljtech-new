const services = [
	{
		name: "Dark Mode",
		description:
			"Dark mode is an option that allows users to change an interfaces color scheme. Dark mode will typically change light backgrounds to dark and dark text to a light. With further customization this can result in multiple different themed interface options.",
	},
	{
		name: "SSL Certificate",
		description:
			"SSL is an acronym for Secure Sockets Layer. SSL Certificates will enable a safe connections to your websites. This is necessary for online commerce and websites that require you to submit other personal information.",
	},
	{
		name: "Web Hosting",
		description:
			"Web hosting with ljtech includes everything from domain registration to securing a 24/7 live website.",
	},
	{
		name: "Dark Mode",
		description:
			"Dark mode is an option that allows users to change an interfaces color scheme. Dark mode will typically change light backgrounds to dark and dark text to a light. With further customization this can result in multiple different themed interface options.",
	},
	{
		name: "Analytic Reports",
		description:
			"Monthly analytic reports to show you how well your website is performing.",
	},
	{
		name: "Increased SEO",
		description:
			"With more details on your business and website performance, ljtech can work towards increasing its lead generation with target demographics.",
	},
	{
		name: "CMS Capability",
		description:
			"CMS stands for content management system. A CMS will allow a client to add content to their own website with the use of an authentication system. This is can be used for things such as blogs or e-commerce websites.",
	},
];

const Services = () => (
	<ul className="p-2">
		{services.map((service, i) => (
			<li className="md:flex md:space-x-4 p-2 border-b">
				<div className="font-black md:w-20 md:text-xs text-right">
					{service.name}
				</div>
				<div className="flex-1 text-justify">{service.description}</div>
			</li>
		))}
	</ul>
);

export default Services;