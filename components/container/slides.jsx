import { useEffect, useState } from "react";
import Button from "../button/button";
import Link from "../text/link";
import Logo from "../svg/logo";
import Title from "../text/title";

const slides = [
	{
		id: 1,
		name: "Consultation",
		image: "green",
		description:
			"Consult with the web developer directly and define your project goals and how ljtech can meet them.",
	},
	{
		id: 2,
		name: "Rough Draft",
		image: "purple",
		description:
			"Creating mockups to illustrate a finished project, this will help ljtech find the right look for your project.",
	},
	{
		id: 3,
		name: "Writing Code",
		image: "red",
		description:
			"Writing the code that powers your application, depending on the scope of work, this may take a while.",
	},
	{
		id: 4,
		name: "Test Launch",
		image: "green",
		description:
			"Launching a working version of your project as soon as possible and working out the flaws in its design.",
	},
	{
		id: 5,
		name: "Analytics",
		image: "purple",
		description:
			"Monitoring your projects live performance and monthly usage, making sure its working as intended.",
	},
	{
		id: 6,
		name: "Optimization",
		image: "red",
		description:
			"With information collected through analytics and personal use, ljtech can finely tune your application.",
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
		<div className="p-2">
			<Title>The web dev process</Title>
			<div className="md:flex md:content-center md:items-center md:justify-around">
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
					<Logo
						classNames="mx-auto inset-x-0 absolute z-30"
						type="outline"
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
