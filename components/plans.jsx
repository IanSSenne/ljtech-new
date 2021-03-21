import { useState } from "react";
import Link from "../components/link";
import Toggle from "./toggle";

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

export default function Plans() {
	const [active, setActive] = useState(false);

	const handleChange = () => {
		setActive((prev) => !prev);
	};

	return (
		<div>
			<h2 className="text-2xl text-center font-semibold capitalize px-2 pb-4">
				Lorem ipsum dolor sit amet consectetur adipisicing
			</h2>
			<p className="text-xl max-w-2xl mx-auto px-2 pb-4">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit nisi
				molestiae sed eum deleniti odio voluptatibus nemo, soluta veniam fugit
				quisquam impedit corporis quos quia tempora illo recusandae delectus
				culpa.
			</p>
			<div className="md:flex md:content-center md:items-center md:justify-around">
				<div className="max-w-xl w-full mx-auto">
					<div className="px-2 flex content-center items-center justify-center">
						<div>Monthly</div>
						<div>
							<Toggle
								off="bg-gray-500"
								on="bg-blue-500"
								handleChange={handleChange}
								isActive={active}
							/>
						</div>
						<div>Yearly</div>
					</div>
					<div className="md:flex md:content-center md:items-center md:justify-center">
						{plans.map((plan, i) => (
							<div
								key={plan.id}
								className={`${plan.classNames} border-black max-w-sm w-full shadow-md p-2 mx-auto mb-1 md:m-0`}
							>
								<h2 className="text-center text-xl font-black">
									{plan.name}
									{active ? (
										<div className="font-bold">${plan.priceYr}/yr</div>
									) : (
										<div className="font-bold">${plan.priceMo}/mo</div>
									)}
								</h2>
								<h3 className="text-sm text-center opacity-60">
									{plan.description}
								</h3>
								<div className="flex content-center items-center justify-center p-2">
									<div className={`w-6 h-1 rounded-full ${plan.color}`}></div>
								</div>
								<ul className="p-2 font-semibold">
									{plan.offers.map((offer, i) => (
										<li key={i} className="w-40 mx-auto">
											{offer}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="text-center p-4">
				<Link
					classNames="px-2 py-1 border border-blue-500 text-blue-500 hover:border-blue-400 hover:text-blue-400 rounded-sm"
					href="/pricing"
				>
					More Details
				</Link>
			</div>
		</div>
	);
}
