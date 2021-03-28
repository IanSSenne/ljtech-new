import Head from "next/head";
import Layout from "@template/layout";
import { Container, Section } from "@container/all";
import { Title } from "@text/all";

export default function Pricing() {
	return (
		<Layout>
			<Head>
				<title>ljtech.ca</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Section>
				<div className="flex justify-center">
					<Container size="small">
						<div className="p-2">
							<Title>About</Title>
							<div className="flex">
								<p className="flex-1">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Labore quia cupiditate quibusdam qui commodi laboriosam eum
									maxime delectus, maiores voluptatum optio ullam corrupti dolor
									natus minima sunt non? Maxime ut eius autem ab odit aut error
									cupiditate fugiat libero modi quis sunt itaque amet aspernatur
									animi ipsam quasi sit nemo nobis a dolorum inventore, eaque
									atque beatae?
								</p>
								<div className="flex p-2">
									<img
										className="border"
										src="/"
										alt="something"
										width="100"
										height="100"
									/>
								</div>
							</div>
						</div>
					</Container>
				</div>
				<div className="flex justify-center">
					<Container size="small">
						<div className="p-2">
							<div className="flex flex-row-reverse">
								<p className="flex-1 md:text-right">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Labore quia cupiditate quibusdam qui commodi laboriosam eum
									maxime delectus, maiores voluptatum optio ullam corrupti dolor
									natus minima sunt non? Maxime ut eius autem ab odit aut error
									cupiditate fugiat libero modi quis sunt itaque amet aspernatur
									animi ipsam quasi sit nemo nobis a dolorum inventore, eaque
									atque beatae?
								</p>
								<div className="flex p-2">
									<img
										className="border"
										src="/"
										alt="something"
										width="100"
										height="100"
									/>
								</div>
							</div>
						</div>
					</Container>
				</div>
			</Section>
			<Section dark={true}>
				<div className="flex justify-center">
					<Container size="small">
						<div className="p-2">
							<ul className="grid grid-cols-2 md:grid-cols-4 opacity-40 max-w-sm mx-auto">
								<li className="font-bold place-self-center p-2">🔺Vercel</li>
								<li className="font-bold place-self-center p-2">🔺Vercel</li>
								<li className="font-bold place-self-center p-2">🔺Vercel</li>
								<li className="font-bold place-self-center p-2">🔺Vercel</li>
								<li className="font-bold place-self-center p-2">🔺Vercel</li>
								<li className="font-bold place-self-center p-2">🔺Vercel</li>
							</ul>
						</div>
					</Container>
				</div>
			</Section>
		</Layout>
	);
}
