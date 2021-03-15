import { useEffect, useRef, useState } from "react";
import Button from "./button";

export default function Slides() {
	const intervalRef = useRef(null);
	const [active, setActive] = useState(0);
	const [pause, setPause] = useState(false);
	const [slides, setSlides] = useState([
		{
			id: 1,
			name: "title 1",
			image: "./ljtech-g.svg",
			description:
				"Upvoting helps exceptional content rise to the top and bring awareness to useful responses.1",
		},
		{
			id: 2,
			name: "title 2",
			image: "./ljtech-r.svg",
			description:
				"Upvoting helps exceptional content rise to the top and bring awareness to useful responses.2",
		},
		{
			id: 3,
			name: "title 3",
			image: "./ljtech-p.svg",
			description:
				"Upvoting helps exceptional content rise to the top and bring awareness to useful responses.3",
		},
		{
			id: 4,
			name: "title 4",
			image: "./ljtech-g.svg",
			description:
				"Upvoting helps exceptional content rise to the top and bring awareness to useful responses.4",
		},
		{
			id: 5,
			name: "title 5",
			image: "./ljtech-r.svg",
			description:
				"Upvoting helps exceptional content rise to the top and bring awareness to useful responses.5",
		},
		{
			id: 6,
			name: "title 6",
			image: "./ljtech-p.svg",
			description:
				"Upvoting helps exceptional content rise to the top and bring awareness to useful responses.6",
		},
	]);

	function resetInterval() {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
	}

	const handleClick = (e, i) => {
		setPause(true);
		setActive((prev) => i);
		clearInterval(intervalRef.current);
	};

	useEffect(() => {
		resetInterval();
		if (!pause) {
			intervalRef.current = setInterval(
				() => setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
				1000
			);
		}
		return () => {
			resetInterval();
		};
	}, [active]);

	useEffect(() => {
		console.log("active", active);
		console.log("interval", intervalRef.current);
		console.log("pause", pause);
	});

	return (
		<div>
			<div className="flex content-center items-center justify-around max-w-lg w-full mx-auto">
				<div>
					{slides.slice(0, 3).map((slideTag, i) => (
						<div key={slideTag.id}>
							{i === active ? (
								<Button
									handleClick={(e) => handleClick(e, i)}
									classNames="shadow-sm m-1"
								>
									{slideTag.name}
								</Button>
							) : (
								<Button
									handleClick={(e) => handleClick(e, i)}
									classNames="border-transparent m-1"
								>
									{slideTag.name}
								</Button>
							)}
						</div>
					))}
				</div>
				<div>
					{slides.map((slideActive, i) => (
						<div key={slideActive.id} className="fade-in">
							{i === active && (
								<div>
									<div>
										<img
											className="mx-auto"
											src={slideActive.image}
											alt={slideActive.name}
											width={60}
											height={60}
										/>
									</div>
								</div>
							)}
						</div>
					))}
				</div>
				<div>
					{slides.slice(3, 6).map((slideTag, i) => (
						<div key={slideTag.id}>
							{i + 3 === active ? (
								<Button
									handleClick={(e) => handleClick(e, i + 3)}
									classNames="shadow-sm m-1"
								>
									{slideTag.name}
								</Button>
							) : (
								<Button
									handleClick={(e) => handleClick(e, i + 3)}
									classNames="border-transparent m-1"
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
										<p className="text-center">{slideActive.description}</p>
									</div>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
