import { useEffect, useRef, useState } from "react";
import Link from "./link";
import Button from "./button";

export default function Slides() {
	// const intervalRef = useRef(null);
	const [counter, setCounter] = useState(null);
	const [active, setActive] = useState(0);
	const [mounted, setMounted] = useState(false);
	const [pause, setPause] = useState(false);
	const [slides, setSlides] = useState([
		{
			id: 1,
			name: "Ask a question",
			image: "./ljtech-g.svg",
			description:
				"Ask a question publicly on 170+ Stack Exchange sites or privately using Stack Overflow for Teams.",
		},
		{
			id: 2,
			name: "Vote on everything",
			image: "./ljtech-r.svg",
			description:
				"Upvoting helps exceptional content rise to the top and bring awareness to useful responses.",
		},
		{
			id: 3,
			name: "Answer questions",
			image: "./ljtech-p.svg",
			description:
				"Answer a question to share your knowledge with the world or in private with your team.",
		},
		{
			id: 4,
			name: "Tag your question",
			image: "./ljtech-g.svg",
			description:
				"Tags help make information searchable and find answers that are important to you.",
		},
		{
			id: 5,
			name: "Accept an answer",
			image: "./ljtech-r.svg",
			description:
				"Accept the answer which solved your problem to let others benefit from the valuable information.",
		},
		{
			id: 6,
			name: "Get recognized",
			image: "./ljtech-p.svg",
			description:
				"Our reputation system rewards both the new & experienced based on contribution and activity.",
		},
	]);

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

	useEffect(() => {
		console.log("active", active);
		console.log("counter", counter);
		console.log("pause", pause);
	});

	return (
		<div>
			<h2 className="text-center text-3xl font-bold px-2 pt-2 pb-4">
				This is a title
			</h2>
			<div className="flex content-center items-center justify-around max-w-lg w-full mx-auto">
				<div className="pr-2">
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
				<div className="relative px-2">
					<img
						className="absolute fade-in"
						src="./ljtech-outline.svg"
						alt="outline"
						width={188}
						height={267}
					/>
					{slides.map((slideActive, i) => (
						<div key={slideActive.id}>
							{i === active && (
								<img
									className="fade-in mx-auto"
									src={slideActive.image}
									alt={slideActive.name}
									width={188}
									height={267}
								/>
							)}
						</div>
					))}
				</div>
				<div className="pl-2">
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
