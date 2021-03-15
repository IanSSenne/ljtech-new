import { useState } from "react";
import Toggle from "./toggle";

const plans = [
	{
		id: 1,
		classNames: "border-l border-t border-b rounded-l-md",
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
		classNames: "border-r border-t border-b rounded-r-md",
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
		<div className="flex content-center items-center justify-around">
			<div className="max-w-xl w-full mx-auto">
				<div className="flex content-center items-center justify-center">
					<div>Monthly</div>
					<div>
						<Toggle
							off="bg-gray-500"
							on="bg-red-500"
							handleChange={handleChange}
							isActive={active}
						/>
					</div>
					<div>Yearly</div>
				</div>
				<div className="flex content-center items-center justify-center">
					{plans.map((plan, i) => (
						<div
							key={plan.id}
							className={`${plan.classNames} border-black w-full shadow-md p-2`}
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
									<li key={i}>{offer}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
