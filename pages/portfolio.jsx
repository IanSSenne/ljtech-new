import { useState } from "react";
import Head from "next/head";
import Link from "../components/link";
import Button from "../components/button";
import Layout from "../components/template/layout";
import Gallery from "../components/gallery";

const tabs = ["Apps", "Art", "Components", "Games"];

export default function Pricing() {
	const [actives, setActives] = useState([1, 0, 0, 0]);

	const handleClick = (e, i) => {
		const newArray = new Array(actives.length).fill(0);
		newArray.splice(i, 1, 1);
		setActives(newArray);
	};

	return (
		<Layout>
			<Head>
				<title>ljtech.ca</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section className="bg-dark dark:bg-light text-light dark:text-dark py-8 sm:py-12 md:py-16">
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-wrap items-center justify-start p-2">
						{tabs.map((tab, i) => (
							<Button
								handleClick={(e) => handleClick(e, i)}
								key={`${tab}${i}`}
								classNames={`${
									actives[i] ? "bg-gray-100 underline" : ""
								} m-1 border-transparent font-semibold text-purple-500 hover:text-purple-400 transition`}
							>
								{tab}
							</Button>
						))}
					</div>
					<div>
						{actives.map((active, i) => (
							<div>
								{active == 1 ? (
									<div>
										<div className="p-2">
											<h2 className="font-bold pb-4">Check Out My Work</h2>
											<p className="pb-2">
												Here is the full collection of work by ljtech.
											</p>
											<p className="pb-2">
												For more detailed information, visit my{" "}
												<Link
													classNames="text-blue-500 hover:text-blue-400 transition"
													href="https://github.com/landonjohnsontechnologies"
													target="_blank"
												>
													Github
												</Link>
											</p>
											<h2 className="text-xl font-semibold pb-4">{tabs[i]}</h2>
										</div>
										<Gallery index={i} />
									</div>
								) : null}
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="py-8 sm:py-12 md:py-16"></section>
		</Layout>
	);
}
