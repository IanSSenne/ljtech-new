import Thumbnail from "./thumbnail";

const apps = [
	{
		id: 1,
		name: "Still Water Stables",
		href: "/",
	},
	{
		id: 2,
		name: "Pipes Up",
		href: "/",
	},
	{
		id: 3,
		name: "Still Water Stables",
		href: "/",
	},
	{
		id: 4,
		name: "Still Water Stables",
		href: "/",
	},
	{
		id: 5,
		name: "Still Water Stables",
		href: "/",
	},
];

const art = [
	{
		id: 1,
		name: "Olson's Recycling & Demolition",
		href: "/",
	},
	{
		id: 1,
		name: "ljtech",
		href: "/",
	},
	{
		id: 1,
		name: "Olson's Recycling & Demolition",
		href: "/",
	},
];

const games = [
	{
		id: 1,
		name: "Concentrate",
		href: "/",
	},
	{
		id: 2,
		name: "Minesweeper",
		href: "/",
	},
];

const components = [
	{
		id: 1,
		name: "Alerts",
		href: "/",
	},
	{
		id: 2,
		name: "Dropdowns",
		href: "/",
	},
	{
		id: 3,
		name: "Toggles",
		href: "/",
	},
];

export default function Gallery({ index }) {
	return (
		<div className="p-2">
			{index === 0 && (
				<ol className="flex flex-wrap content-center items-center justify-center md:justify-start">
					{apps.map((item, i) => (
						<Thumbnail key={item.id} classNames="" href={item.href}>
							<div>{item.name}</div>
							<div>button here</div>
						</Thumbnail>
					))}
				</ol>
			)}
			{index === 1 && (
				<ol className="flex flex-wrap content-center items-center justify-center md:justify-start">
					{art.map((item, i) => (
						<Thumbnail key={item.id} classNames="" href={item.href}>
							<div>{item.name}</div>
							<div>button here</div>
						</Thumbnail>
					))}
				</ol>
			)}
			{index === 2 && (
				<ol className="flex flex-wrap content-center items-center justify-center md:justify-start">
					{components.map((item, i) => (
						<Thumbnail key={item.id} classNames="" href={item.href}>
							<div>{item.name}</div>
							<div>button here</div>
						</Thumbnail>
					))}
				</ol>
			)}
			{index === 3 && (
				<ol className="flex flex-wrap content-center items-center justify-center md:justify-start">
					{games.map((item, i) => (
						<Thumbnail key={item.id} classNames="" href={item.href}>
							<div>{item.name}</div>
							<div>button here</div>
						</Thumbnail>
					))}
				</ol>
			)}
		</div>
	);
}
