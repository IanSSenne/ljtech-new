import { useState } from "react";
import Head from "next/head";
import Layout from "@template/layout";
import Button from "@button/button";
import Container from "@container/container";
import Section from "@container/section";
import Input from "@form/input";
import Textarea from "@form/textarea";
import Title from "@text/title";

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
						<form onSubmit={(e) => handleForm(e)} className="p-1">
							<fieldset className="border rounded-md sm:p-2">
								<legend className="text-center">
									<Title>Contact</Title>
								</legend>
								<div className="p-2">
									<p>
										You can fill out this form below and I will get back to you
										as soon as possible!
									</p>
								</div>
								<div className="sm:flex sm:space-x-2">
									<Input
										label="First name"
										helper="Enter your first name"
										name="first"
										type="text"
										placeholder="John"
									/>
									<Input
										label="Last name"
										helper="Enter your last name"
										name="last"
										type="text"
										placeholder="Smith"
									/>
								</div>
								<div className="sm:flex sm:space-x-2">
									<Input
										label="Email address"
										helper="Enter your email address"
										name="email"
										type="email"
										placeholder="example@email.com"
									/>
									<Input
										label="Telephone #"
										helper="Enter your tel #"
										name="telephone"
										type="tel"
										placeholder="(555) 555-4545"
									/>
								</div>
								<Textarea
									label="Your message"
									placeholder="Whats on your mind?"
									max={1000}
									handleChange={(e) => setCount(1000 - e.target.value.length)}
									helper={`Remaining: ${count}`}
								/>
								<div className="grid pb-4">
									<Button
										classNames="border-green-500 text-green-500 hover:border-green-400 hover:text-green-400 m-1"
										type="submit"
									>
										💌 Submit
									</Button>
								</div>
							</fieldset>
						</form>
					</Container>
				</div>
			</Section>
		</Layout>
	);
}
