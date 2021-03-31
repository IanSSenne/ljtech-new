import Container from "@container/container";

export default function Cloud({ languages, frameworks, products }) {
	return (
		<div className="flex justify-center">
			<Container>
				<div className="p-2 flex content-center items-center justify-center">
					<div>
						<ul className="flex flex-wrap opacity-60 py-4">
							<li className="font-semibold p-2">Languages</li>
							{languages.map((language, i) => (
								<li key={language} className="font-light p-2">
									{language}
								</li>
							))}
						</ul>
						<hr className="border-light dark:border-dark max-w-lg" />
						<ul className="flex flex-wrap opacity-60 py-4">
							<li className="font-semibold p-2">Frameworks</li>
							{frameworks.map((framework, i) => (
								<li key={framework} className="font-light p-2">
									{framework}
								</li>
							))}
						</ul>
						<hr className="border-light dark:border-dark max-w-lg" />
						<ul className="flex flex-wrap opacity-60 py-4">
							<li className="font-semibold p-2">Products</li>
							{products.map((product, i) => (
								<li key={product} className="font-light p-2">
									{product}
								</li>
							))}
						</ul>
					</div>
				</div>
			</Container>
		</div>
	);
}
