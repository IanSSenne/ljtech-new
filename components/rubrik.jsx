import { useState } from "react";
import Toggle from "./toggle";

export default function Rubrik() {
	const [active, setActive] = useState(false);

	const handleChange = () => {
		setActive((prev) => !prev);
	};

	const plans = [
		{
			id: 0,
			name: (
				<Toggle
					off="bg-gray-500"
					on="bg-green-500"
					handleChange={handleChange}
					isActive={active}
				/>
			),
			array: [
				"Dark Mode",
				"SSL Certificate",
				"Web Hosting",
				"Analytic Reports",
				"Increased SEO",
				"CMS Capability",
			],
		},
		{
			id: 1,
			name: "Basic",
			month: 50,
			year: 600,
			array: ["✔", "✔", "✔", "❌", "❌", "❌"],
		},
		{
			id: 2,
			name: "Business",
			month: 100,
			year: 1000,
			array: ["✔", "✔", "✔", "✔", "✔", "❌"],
		},
		{
			id: 3,
			name: "Enterprise",
			month: 150,
			year: 1800,
			array: ["✔", "✔", "✔", "✔", "✔", "✔"],
		},
	];

	return (
		<div>
			<div className="grid grid-cols-4">
				{plans.map((plan, i) => (
					<div key={plan.id}>
						{i == 0 && (
							<div className="h-full p-2 flex content-center items-center justify-center border-b">
								<div className="hidden md:block text-xs font-black">/mo</div>
								{plan.name}
								<div className="hidden md:block text-xs font-black">/yr</div>
							</div>
						)}
						{i > 0 ? (
							<div
								className={`${
									i == 2
										? "bg-light text-dark dark:bg-dark dark:text-light border-b"
										: ""
								} p-2`}
							>
								<h2 className="text-xs md:text-xl font-bold text-center">
									{plan.name}
								</h2>
								<h3 className="text-sm md:text-3xl font-black text-center">
									<sup>
										<span className="text-xs md:text-sm">$</span>
									</sup>
									{!active ? (
										<span className="">{plan.month}</span>
									) : (
										<span>{plan.year}</span>
									)}
									{active ? (
										<span className="text-xs md:text-sm">/yr</span>
									) : (
										<span className="text-xs md:text-sm">/mo</span>
									)}{" "}
								</h3>
							</div>
						) : (
							""
						)}
					</div>
				))}
			</div>
			<div className="grid grid-cols-4">
				{plans.map((plan, i) => (
					<ul
						key={i}
						className={`${i == 0 ? "font-semibold text-xs" : ""}${
							i > 0 ? "text-center" : ""
						} ${
							i == 2 ? "bg-light text-dark dark:bg-dark dark:text-light" : ""
						}`}
					>
						{plans[i].array.map((arr, a) => (
							<li
								key={a}
								className={`flex items-center ${
									i > 0 ? "justify-center" : ""
								} p-2 h-12`}
							>
								{arr}
							</li>
						))}
					</ul>
				))}
			</div>
		</div>
	);
}
