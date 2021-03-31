import { frameworks, languages, products } from "@lib/content";
import Block from "@container/block";
import Clip from "@svg/clip";
import Cloud from "@container/cloud";
import Head from "next/head";
import Layout from "@template/layout";
import Container from "@container/container";
import Section from "@container/section";
import Title from "@text/title";

export default function Pricing() {
	return (
		<Layout>
			<Head>
				<title>ljtech.ca</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Section>
				<div className="flex justify-center pb-4">
					<Container>
						<div className="p-2">
							<Title>About</Title>
							<Block
								set="../800x600.png"
								src="../1200x480-clip.png"
								alt="ljtech test"
							>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
								rem temporibus quibusdam quisquam, eaque tempora. Ipsa, illo
								aliquid minus dicta sit nostrum maxime vero voluptate harum
								officia fuga nihil omnis adipisci error fugit dolor laboriosam
								nam consequatur esse eaque quisquam est iure dolore voluptatem.
								Quae repellendus doloribus rerum nobis? Ullam placeat corrupti
								minima officia quo sint totam cum doloribus temporibus.
							</Block>
						</div>
					</Container>
				</div>
				<div className="flex justify-center">
					<Container>
						<div className="p-2">
							<Block
								set="../800x600.png"
								src="../1200x480-clip.png"
								alt="ljtech test"
								reverse={true}
							>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
								rem temporibus quibusdam quisquam, eaque tempora. Ipsa, illo
								aliquid minus dicta sit nostrum maxime vero voluptate harum
								officia fuga nihil omnis adipisci error fugit dolor laboriosam
								nam consequatur esse eaque quisquam est iure dolore voluptatem.
								Quae repellendus doloribus rerum nobis? Ullam placeat corrupti
								minima officia quo sint totam cum doloribus temporibus.
							</Block>
						</div>
					</Container>
				</div>
			</Section>
			<Section dark={true}>
				<Cloud
					languages={languages}
					frameworks={frameworks}
					products={products}
				/>
			</Section>
		</Layout>
	);
}
