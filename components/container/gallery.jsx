import Thumbnail from "./thumbnail";

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

export default function Gallery({ index }) {
	return (
		<div className="p-2">
			{index === 0 && (
				<ol className="flex flex-wrap content-center items-center justify-center md:justify-start">
					{apps.map((app, i) => (
						<Thumbnail
							key={app.id}
							title={app.name}
							helper="View"
							href={app.href}
						/>
					))}
				</ol>
			)}
			{index === 1 && (
				<ol className="flex flex-wrap content-center items-center justify-center md:justify-start">
					{art.map((piece, i) => (
						<Thumbnail
							key={piece.id}
							title={piece.name}
							helper="View"
							href={piece.href}
						/>
					))}
				</ol>
			)}
			{index === 2 && (
				<ol className="flex flex-wrap content-center items-center justify-center md:justify-start">
					{components.map((component, i) => (
						<Thumbnail
							key={component.id}
							title={component.name}
							helper="View"
							href={component.href}
						/>
					))}
				</ol>
			)}
			{index === 3 && (
				<ol className="flex flex-wrap content-center items-center justify-center md:justify-start">
					{games.map((game, i) => (
						<Thumbnail
							key={game.id}
							title={game.name}
							helper="View"
							href={game.href}
						/>
					))}
				</ol>
			)}
		</div>
	);
}
