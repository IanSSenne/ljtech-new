import { useState } from "react";
import Head from "next/head";
import Layout from "../components/template/layout";
import Inputfield from "../components/inputfield";
import Textfield from "../components/textfield";
import Button from "../components/button";
import Section from "../components/section";
import Container from "../components/container";

export default function Contact() {
	const [count, setCount] = useState(1000);
	const handleForm = (e) => {
		e.preventDefault();
		const newTarget = e.target;
		const newForm = new FormData(newTarget);
		console.log(Object.fromEntries(newForm));
	};

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
							<h1 className="text-3xl text-center font-black p-2">Contact</h1>
							<p>
								You can fill out this form below and I will get back to you as
								soon as possible!
							</p>
						</div>
						<form onSubmit={(e) => handleForm(e)} className="p-1">
							<div className="md:flex md:space-x-2">
								<Inputfield
									legend="First name"
									helper="Enter your first name"
									name="first"
									type="text"
									placeholder="John"
								/>
								<Inputfield
									legend="Last name"
									helper="Enter your last name"
									name="last"
									type="text"
									placeholder="Smith"
								/>
							</div>
							<div className="md:flex md:space-x-2">
								<Inputfield
									legend="Email address"
									helper="Enter your email address"
									name="email"
									type="email"
									placeholder="example@email.com"
								/>
								<Inputfield
									legend="Telephone #"
									helper="Enter your tel #"
									name="telephone"
									type="tel"
									placeholder="(555) 555-4545"
								/>
							</div>
							<Textfield
								legend="Your message"
								placeholder="Whats on your mind?"
								max={1000}
								handleChange={(e) => setCount(1000 - e.target.value.length)}
								helper={count}
							/>
							<div className="grid">
								<Button
									classNames="border-green-500 text-green-500 hover:border-green-400 hover:text-green-400 transition"
									type="submit"
								>
									💌 Submit
								</Button>
							</div>
						</form>
					</Container>
				</div>
			</Section>
		</Layout>
	);
}
