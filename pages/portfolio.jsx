import { useState } from "react";
import Head from "next/head";
import Layout from "@template/layout";
import { Button } from "@button/all";
import { Container, Section, Gallery } from "@container/all";
import { Link, Title } from "@text/all";

const tabs = ["Apps", "Art", "Components", "Games"];

const apps = [
	{
		id: "sws",
		name: "Still Water Stables",
		href: "/",
	},
	{
		id: "pup",
		name: "Pipes Up",
		href: "/",
	},
	{
		id: "aaa",
		name: "Still Water Stables",
		href: "/",
	},
	{
		id: "bbb",
		name: "Still Water Stables",
		href: "/",
	},
	{
		id: "ccc",
		name: "Still Water Stables",
		href: "/",
	},
];

const art = [
	{
		id: "ord",
		name: "Olson's Recycling & Demolition",
		href: "/",
	},
	{
		id: "ljd",
		name: "ljtech",
		href: "/",
	},
	{
		id: "ddd",
		name: "Olson's Recycling & Demolition",
		href: "/",
	},
];

const games = [
	{
		id: "con",
		name: "Concentrate",
		href: "/",
	},
	{
		id: "min",
		name: "Minesweeper",
		href: "/",
	},
];

const components = [
	{
		id: "ale",
		name: "Alerts",
		href: "/",
	},
	{
		id: "dro",
		name: "Dropdowns",
		href: "/",
	},
	{
		id: "tog",
		name: "Toggles",
		href: "/",
	},
];

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
			<Section>
				<Container>
					<div className="p-2">
						<Title>Portfolio</Title>
						<div className="flex flex-wrap items-center justify-start">
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
										<Gallery
											index={i}
											apps={apps}
											art={art}
											components={components}
											games={games}
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
