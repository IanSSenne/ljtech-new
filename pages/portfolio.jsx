import { useState } from "react";
import { tabs, apps, art, components, games, all } from "@lib/content";
import Head from "next/head";
import Layout from "@template/layout";
import Button from "@button/button";
import Container from "@container/container";
import Section from "@container/section";
import Gallery from "@container/gallery";
import Title from "@text/title";
import Link from "@text/link";

export default function Pricing() {
	const [actives, setActives] = useState([1, 0, 0, 0, 0]);

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
			<Section>
				<Container>
					<div className="p-2">
						<Title>Portfolio</Title>
						<div className="flex flex-wrap items-center justify-start max-w-sm md:max-w-lg lg:max-w-3xl mx-auto">
							{tabs.map((tab, i) => (
								<Button
									handleClick={(e) => handleClick(e, i)}
									key={tab}
									classNames={`${
										actives[i] ? "bg-gray-100 underline" : ""
									} m-1 border-transparent font-semibold text-purple-500 hover:text-purple-400 transition`}
								>
									{tab}
								</Button>
							))}
						</div>
					</div>
					<div>
						{actives.map((active, i) => (
							<div key={i}>
								{active == 1 ? (
									<div>
										<div className="p-2 max-w-sm md:max-w-lg lg:max-w-3xl mx-auto">
											<h2 className="font-bold pb-4 text-center md:text-left">
												Check Out My Work
											</h2>
											<p className="pb-2">
												Here is the full collection of work by ljtech.
											</p>
											<p className="pb-4">
												For more detailed information, visit my{" "}
												<Link
													classNames="text-blue-500 hover:text-blue-400 transition"
													href="https://github.com/landonjohnsontechnologies"
													target="_blank"
												>
													Github
												</Link>
											</p>
										</div>
										<Gallery
											index={i}
											all={all}
											apps={apps}
											art={art}
											components={components}
											games={games}
											tabs={tabs}
										/>
									</div>
								) : null}
							</div>
						))}
					</div>
				</Container>
			</Section>
		</Layout>
	);
}
