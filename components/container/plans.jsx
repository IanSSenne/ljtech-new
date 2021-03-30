import { useState } from "react";
import Link from "@text/link";
import Toggle from "@button/toggle";
import Title from "@text/title";

export default function Plans({ plans }) {
	const [active, setActive] = useState(false);

	const handleChange = () => {
		setActive((prev) => !prev);
	};

	return (
		<div>
			<div className="p-2">
				<Title>Check out the ljtech plans</Title>
				<div className="md:flex md:content-center md:items-center md:justify-around">
					<div className="max-w-xl w-full mx-auto">
						<div className="flex content-center items-center justify-center">
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
									className={`${plan.classNames} flex justify-around md:block border-black max-w-sm w-full shadow-md p-2 mx-auto mb-1 md:m-0 md:p-4 lg:p-8`}
								>
									<div>
										<h2 className="md:text-center text-xl font-black">
											{plan.name}
											{active ? (
												<div className="font-bold">${plan.priceYr}/yr</div>
											) : (
												<div className="font-bold">${plan.priceMo}/mo</div>
											)}
										</h2>
										<h3 className="text-sm md:text-center opacity-60">
											{plan.description}
										</h3>
									</div>
									<div className="flex content-center items-center justify-center p-2">
										<div
											className={`w-1 h-6 md:w-6 md:h-1 rounded-full ${plan.color}`}
										></div>
									</div>
									<ul className="md:px-2 pt-2 pb-4 font-semibold">
										{plan.offers.map((offer, i) => (
											<li
												key={i}
												className="border rounded-sm p-0.5 shadow-sm my-0.5 text-right text-xs md:text-base md:border-none md:shadow-none md:text-left md:w-40 mx-auto"
											>
												{offer}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="flex flex-wrap content-center items-center justify-center px-2 py-8">
					<div className="flex-1">
						<p className="text-xl">
							Want to learn more what each plan includes?
						</p>
					</div>
					<div className="text-center flex-1">
						<Link
							classNames="px-2 py-1 border border-blue-500 text-blue-500 hover:border-blue-400 hover:text-blue-400 rounded-sm"
							href="/pricing"
						>
							More Details
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
