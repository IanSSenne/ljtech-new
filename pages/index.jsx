import Head from "next/head";
import Layout from "@template/layout";
import { Container, Plans, Section, Slides } from "@container/all";
import { Bubbles, Clip } from "@svg/all";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>ljtech.ca</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section>
				<div style={{ minHeight: "calc(100vh - 6rem)" }} className="grid">
					<Bubbles
						classNames="flex content-center items-center justify-center lg:hidden"
						width="calc(50vw - 10%)"
						height="50vw"
					/>
					<div className="max-w-6xl mx-auto flex items-center">
						<div className="flex content-center items-center justify-between">
							<div style={{ maxWidth: "43rem" }} className="p-2">
								<h1 className="w-full font-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl p-2 mb-4">
									Need a website for your business?
								</h1>
								<p className="text-xl sm:text-2xl md:text-3xl px-2 pt-2 pb-12 lg:py-2">
									Build, develop and maintain your business online with a
									beautiful website from{" "}
									<span className="font-semibold">ljtech</span>. No shortcuts
									will be taken - 100% custom-made with direct webmaster
									support.
								</p>
							</div>
							<Bubbles
								classNames="p-2 hidden lg:block"
								width="calc(25vw - 10%)"
								height="calc(25vw - 10%)"
							/>
						</div>
					</div>
					<Clip classNames="w-full place-self-end" width="100%" height="100%" />
				</div>
			</section>
			<Section dark={true}>
				<div className="flex justify-center">
					<Container size="small">
						<Slides />
					</Container>
				</div>
			</Section>
			<Section>
				<div className="flex justify-center">
					<Container size="small">
						<Plans />
					</Container>
				</div>
			</Section>
		</Layout>
	);
}
