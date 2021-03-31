import { useEffect, useState } from "react";
import Button from "@button/button";
import Link from "@text/link";
import Logo from "@svg/logo";
import Title from "@text/title";

export default function Slideshow() {
	const slides = [
		{
			id: 1,
			name: "Consultation",
			image: "../A.svg",
			description:
				"Consult with the web developer directly and define your project goals and how ljtech can meet them.",
		},
		{
			id: 2,
			name: "Rough Draft",
			image: "../B.svg",
			description:
				"Creating mockups to illustrate a finished project, this will help ljtech find the right look for your project.",
		},
		{
			id: 3,
			name: "Writing Code",
			image: "../C.svg",
			description:
				"Writing the code that powers your application, depending on the scope of work, this may take a while.",
		},
		{
			id: 4,
			name: "Test Launch",
			image: "../D.svg",
			description:
				"Launching a working version of your project as soon as possible and working out the flaws in its design.",
		},
		{
			id: 5,
			name: "Analytics",
			image: "../E.svg",
			description:
				"Monitoring your projects live performance and monthly usage, making sure its working as intended.",
		},
		{
			id: 6,
			name: "Optimization",
			image: "../F.svg",
			description:
				"With information collected through analytics and personal use, ljtech can finely tune your application.",
		},
	];

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
		if (!mounted) {
			setMounted(true);
			const counter = setInterval(() => {
				setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
			}, 5000);
			return () => clearInterval(counter);
		}
	}, []);

	useEffect(() => {
		if (mounted && pause) {
			clearInterval(counter);
		}
	}, [pause]);

	return (
		<div className="p-2">
			<Title>The web dev process</Title>
			<div className="md:flex md:content-center md:items-center md:justify-around">
				<div className="flex content-center items-center justify-center md:block md:pr-2">
					{slides.slice(0, 3).map((slideTag, i) => (
						<div key={slideTag.id}>
							{i === active ? (
								<Button
									handleClick={(e) => handleClick(e, i)}
									classNames="border-blue-500 shadow-md font-bold text-sm text-left shadow-sm m-1"
								>
									{slideTag.name}
								</Button>
							) : (
								<Button
									handleClick={(e) => handleClick(e, i)}
									classNames="hover:border-purple-500 shadow-sm font-bold hover:shadow-md text-sm text-left border-transparent m-1"
								>
									{slideTag.name}
								</Button>
							)}
						</div>
					))}
				</div>
				<div className="relative px-2 flex justify-center">
					{slides.map((slideActive, i) => (
						<div key={slideActive.id}>
							{i === active && (
								<img
									className="p-2 fade-in h-40"
									src={slideActive.image}
									alt={slideActive.id}
									width="160"
									height="160"
									draggable={false}
								/>
							)}
						</div>
					))}
				</div>
				<div className="flex content-center items-center justify-center md:block pb-4 md:pb-0 md:pl-2 md:text-right">
					{slides.slice(3, 6).map((slideTag, i) => (
						<div key={slideTag.id}>
							{i + 3 === active ? (
								<Button
									handleClick={(e) => handleClick(e, i + 3)}
									classNames="border-blue-500 shadow-md font-bold text-sm text-left shadow-sm m-1"
								>
									{slideTag.name}
								</Button>
							) : (
								<Button
									handleClick={(e) => handleClick(e, i + 3)}
									classNames="hover:border-purple-500 shadow-sm font-bold hover:shadow-md text-sm text-left border-transparent m-1"
								>
									{slideTag.name}
								</Button>
							)}
						</div>
					))}
				</div>
			</div>
			<div>
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
