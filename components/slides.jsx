import { useEffect, useState } from "react";
import Link from "./link";
import Button from "./button";
import Outline from "../components/outline";
import Logo from "../components/logo";

const slides = [
	{
		id: 1,
		name: "Ask a question",
		image: "green",
		description:
			"Ask a question publicly on 170+ Stack Exchange sites or privately using Stack Overflow for Teams.",
	},
	{
		id: 2,
		name: "Vote on everything",
		image: "purple",
		description:
			"Upvoting helps exceptional content rise to the top and bring awareness to useful responses.",
	},
	{
		id: 3,
		name: "Answer questions",
		image: "red",
		description:
			"Answer a question to share your knowledge with the world or in private with your team.",
	},
	{
		id: 4,
		name: "Tag your question",
		image: "green",
		description:
			"Tags help make information searchable and find answers that are important to you.",
	},
	{
		id: 5,
		name: "Accept an answer",
		image: "purple",
		description:
			"Accept the answer which solved your problem to let others benefit from the valuable information.",
	},
	{
		id: 6,
		name: "Get recognized",
		image: "red",
		description:
			"Our reputation system rewards both the new & experienced based on contribution and activity.",
	},
];

export default function Slides() {
	const [counter, setCounter] = useState(null);
	const [active, setActive] = useState(0);
	const [mounted, setMounted] = useState(false);
	const [pause, setPause] = useState(false);

	const handleClick = (e, i) => {
		setPause(true);
		setActive((prev) => i);
		clearInterval(counter);
	};

	useEffect(() => {
		if (pause) {
			clearInterval(counter);
		}
	}, [pause]);
	useEffect(() => {
		if (!mounted) {
			setMounted(true);
			setCounter(
				setInterval(
					() =>
						setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
					5000
				)
			);
		}
	}, []);

	return (
		<div>
			<h2 className="text-center text-3xl font-bold px-2 pt-2 pb-4">
				This is a title
			</h2>
			<div className="md:flex md:content-center md:items-center md:justify-around max-w-lg w-full mx-auto">
				<div className="flex content-center items-center justify-center md:block pr-2">
					{slides.slice(0, 3).map((slideTag, i) => (
						<div key={slideTag.id}>
							{i === active ? (
								<Button
									handleClick={(e) => handleClick(e, i)}
									classNames="border-black shadow-md text-sm text-left shadow-sm m-1"
								>
									{slideTag.name}
								</Button>
							) : (
								<Button
									handleClick={(e) => handleClick(e, i)}
									classNames="hover:border-black shadow-sm hover:shadow-md text-sm text-left border-transparent m-1"
								>
									{slideTag.name}
								</Button>
							)}
						</div>
					))}
				</div>
				<div className="relative px-2 flex justify-center">
					<Outline
						classNames="mx-auto absolute z-30"
						width="clamp(11rem, 33vw, 22rem)"
						height="clamp(11rem, 33vw, 22rem)"
					/>
					{slides.map((slideActive, i) => (
						<div key={slideActive.id}>
							{i === active && (
								<Logo
									classNames="mx-auto relative z-40 fade-in"
									type={slideActive.image}
									width="clamp(11rem, 33vw, 22rem)"
									height="clamp(11rem, 33vw, 22rem)"
								/>
							)}
						</div>
					))}
				</div>
				<div className="flex content-center items-center justify-center md:block pl-2">
					{slides.slice(3, 6).map((slideTag, i) => (
						<div key={slideTag.id}>
							{i + 3 === active ? (
								<Button
									handleClick={(e) => handleClick(e, i + 3)}
									classNames="border-black shadow-md text-sm text-left shadow-sm m-1"
								>
									{slideTag.name}
								</Button>
							) : (
								<Button
									handleClick={(e) => handleClick(e, i + 3)}
									classNames="hover:border-black shadow-sm hover:shadow-md text-sm text-left border-transparent m-1"
								>
									{slideTag.name}
								</Button>
							)}
						</div>
					))}
				</div>
			</div>
			<div className="max-w-md w-full mx-auto px-2 pb-2 pt-4">
				{slides.map((slideActive, i) => (
					<div key={slideActive.id}>
						<div>
							{i === active && (
								<div>
									<div>
										<p className="text-xl text-center">
											{slideActive.description}
										</p>
									</div>
								</div>
							)}
						</div>
					</div>
				))}
				<div className="text-center px-2 pb-2 pt-4">
					<Link
						classNames="px-2 py-1 border border-blue-500 text-blue-500 hover:border-blue-400 hover:text-blue-400 rounded-sm"
						href="/"
					>
						Go Somewhere
					</Link>
				</div>
			</div>
		</div>
	);
}
