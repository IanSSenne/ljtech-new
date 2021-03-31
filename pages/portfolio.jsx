import { useState } from "react";
import { tabs, apps, art, components, games, all, socials } from "@lib/content";
import Action from "@container/action";
import Head from "next/head";
import Layout from "@template/layout";
import Button from "@button/button";
import Container from "@container/container";
import Section from "@container/section";
import Gallery from "@container/gallery";
import Title from "@text/title";

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
									} m-1 border-transparent font-semibold text-purple-500 hover:text-purple-400`}
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
			<Section dark={true}>
				<Action
					href={socials[3].href}
					title="Want more ljtech projects?"
					call="Find more"
				>
					of my work on Github
				</Action>
			</Section>
		</Layout>
	);
}
