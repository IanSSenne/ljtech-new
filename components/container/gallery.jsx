import Thumbnail from "./thumbnail";

export default function Gallery({ apps, art, games, components, index }) {
	return (
		<div className="p-2 flex justify-center lg:justify-start">
			{index === 0 && (
				<ol className="flex flex-wrap justify-center">
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
				<ol className="flex flex-wrap justify-center">
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
				<ol className="flex flex-wrap justify-center">
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
				<ol className="flex flex-wrap justify-center">
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
