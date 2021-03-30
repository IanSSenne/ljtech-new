import Thumbnail from "./thumbnail";

export default function Gallery({
	all,
	apps,
	art,
	games,
	components,
	index,
	tabs,
}) {
	return (
		<div className="p-2">
			<h2 className="p-2 text-xl font-black text-center text-purple-500">
				{tabs[index]}
			</h2>
			<div>
				{index === 0 && (
					<ol className="grid md:grid-cols-3">
						{apps.map((app, i) => (
							<Thumbnail
								key={app.id}
								title={app.name}
								helper="View"
								href={app.href}
								src={app.src}
								content={app.content}
							/>
						))}
					</ol>
				)}
				{index === 1 && (
					<ol className="grid grid-cols-3">
						{art.map((piece, i) => (
							<Thumbnail
								key={piece.id}
								title={piece.name}
								helper="View"
								href={piece.href}
								src={piece.src}
								content={piece.content}
							/>
						))}
					</ol>
				)}
				{index === 2 && (
					<ol className="grid grid-cols-3">
						{components.map((component, i) => (
							<Thumbnail
								key={component.id}
								title={component.name}
								helper="View"
								href={component.href}
								src={component.src}
								content={component.content}
							/>
						))}
					</ol>
				)}
				{index === 3 && (
					<ol className="grid grid-cols-3">
						{games.map((game, i) => (
							<Thumbnail
								key={game.id}
								title={game.name}
								helper="View"
								href={game.href}
								src={game.src}
								content={game.content}
							/>
						))}
					</ol>
				)}
				{index === 4 && (
					<ol className="grid grid-cols-3">
						{all.map((item, i) => (
							<Thumbnail
								key={`${item.id}B`}
								title={item.name}
								helper="View"
								href={item.href}
								src={item.src}
								content={item.content}
							/>
						))}
					</ol>
				)}
			</div>
		</div>
	);
}
