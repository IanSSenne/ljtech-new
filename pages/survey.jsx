import { useState } from "react";
import Head from "next/head";
import Layout from "@template/layout";
import Button from "@button/button";
import Toggle from "@button/toggle";
import Container from "@container/container";
import Section from "@container/section";
import Steps from "@container/steps";
import Input from "@form/input";
import Inputs from "@form/inputs";
import Select from "@form/select";
import Textarea from "@form/textarea";
import Title from "@text/title";

const options = [
	"Sole Proprietorship (Unincorporated Business)",
	"Small Business (1 - 99 employees)",
	"Medium Business (100 - 499 employees)",
	"Large Business (500+ employees)",
];

export default function Survey() {
	const [count, setCount] = useState(2000);
	const [budget, setBudget] = useState(15000);
	const [fields, setFields] = useState([""]);
	const [active, setActive] = useState(false);
	const [step, setStep] = useState(0);

	const handleBudget = (e) => {
		const newTarget = e.target.value;
		newTarget.toLocaleString();
		setBudget(newTarget);
	};

	const handleProject = () => {
		setActive((prev) => !prev);
	};

	const addFields = (e) => {
		e.preventDefault();
		setFields((newArray) => [...newArray, ""]);
	};

	const changeFields = (e, i) => {
		const newTarget = e.target.value;
		const newArray = [...fields];
		newArray[i] = newTarget;
		setFields(newArray);
	};

	const removeFields = (e, i) => {
		e.preventDefault();
		const newArray = [...fields];
		newArray.splice(i, 1);
		setFields(newArray);
	};

	const nextStep = (e) => {
		e.preventDefault();
		const newStep = step + 1;
		setStep(newStep);
		window.scrollTo({ top: 0 });
	};

	const backStep = (e) => {
		e.preventDefault();
		const newStep = step - 1;
		setStep(newStep);
		window.scrollTo({ top: 0 });
	};

	const handleForm = (e) => {
		e.preventDefault();
	};

	return (
		<Layout>
			<Head>
				<title>ljtech.ca survey</title>
			</Head>
			<Section>
				<Container size="small">
					<form onSubmit={(e) => handleForm(e)} className="p-1">
						<fieldset className="border rounded-md sm:p-2">
							<legend className="text-center">
								<Title>Survey</Title>
							</legend>
							<div className="p-2">
								<Steps step={step} />
							</div>
							{step === 0 && (
								<div>
									<div className="sm:flex sm:space-x-2">
										<Input
											label="First name"
											name="first"
											type="text"
											placeholder="John"
											max={30}
											helper="Enter your first name."
											isRequired={true}
										/>
										<Input
											label="Last name"
											name="last"
											type="text"
											placeholder="Smith"
											max={30}
											helper="Enter your last name."
											isRequired={true}
										/>
									</div>
									<div className="sm:flex sm:space-x-2">
										<Input
											label="Email address"
											name="email"
											type="email"
											placeholder="exmaple@email.com"
											helper="Enter your email address."
											isRequired={true}
										/>
										<Input
											label="Phone number"
											name="tel"
											type="tel"
											placeholder="(555) 555-4545"
											helper="Enter your tel number."
											isRequired={true}
										/>
									</div>
								</div>
							)}
							{step === 1 && (
								<div>
									<div className="flex content-center items-center justify-center">
										<div>Old Project</div>
										<Toggle
											off="bg-gray-500 border-light dark:border-dark"
											on="bg-blue-500 border-light dark:border-dark"
											handleChange={handleProject}
											isActive={active}
										/>
										<div>New Project</div>
									</div>
									{active ? (
										<Input
											label="Project name"
											name="project"
											type="text"
											placeholder="new-project.com"
											helper="Enter your new project name."
											isRequired={true}
										/>
									) : (
										<Input
											label="Website name"
											name="project"
											type="text"
											placeholder="website.com"
											helper="Enter your current websites url."
											isRequired={true}
										/>
									)}
									<Textarea
										label="Your goals"
										name="goals"
										placeholder="What are your goals for this project?"
										handleChange={(e) => setCount(2000 - e.target.value.length)}
										helper={`Characters remaining: ${count}`}
										isRequired={false}
									/>
									<div className="sm:flex sm:space-x-2">
										<Input
											label="Page count"
											name="pages"
											type="number"
											placeholder="1"
											min={1}
											max={1000}
											helper="Estimate project size."
											isRequired={true}
										/>
										<Input
											label="Project deadline"
											name="deadline"
											type="date"
											helper="Enter your project deadline."
											isRequired={true}
										/>
									</div>
								</div>
							)}
							{step === 2 && (
								<div>
									<Select
										label="Business size"
										name="business"
										helper="Enter your businesses size."
										isRequired={true}
										options={options}
									/>
									<Input
										style={{ padding: "0", border: "none", height: "40px" }}
										label="Brand color"
										name="color"
										defaultValue="#05a05a"
										type="color"
										helper="Enter your brand color."
										isRequired={true}
									/>
									<Input
										style={{
											padding: "0",
											margin: "0 .5rem",
											border: "none",
										}}
										label="Budget"
										name="project"
										type="range"
										placeholder="new-project.com"
										helper={`Your selected budget: ~${budget} CAD`}
										min={1000}
										step={500}
										max={30000}
										defaultValue={15000}
										handleChange={(e) => handleBudget(e)}
										isRequired={true}
									/>
									<Inputs
										title="Competitor Websites"
										label="Website"
										fields={fields}
										type="url"
										name="url"
										placeholder="https://example.com"
										handleRemove={removeFields}
										handleChange={changeFields}
										handleAdd={(e) => addFields(e)}
										minFields={1}
										maxFields={4}
										helper="Enter up to 5 competitor websites"
									/>
								</div>
							)}
							<div className="pb-4 grid grid-cols-2 gap-x-2">
								{step === 0 && <div></div>}
								{step >= 1 && (
									<Button
										classNames="border-blue-500 text-blue-500 hover:text-blue-400 hover:border-blue-400 m-1"
										handleClick={(e) => backStep(e)}
									>
										Back
									</Button>
								)}
								{step >= 0 && step < 2 && (
									<Button
										classNames="border-blue-500 text-blue-500 hover:text-blue-400 hover:border-blue-400 m-1"
										handleClick={(e) => nextStep(e)}
									>
										Next
									</Button>
								)}
								{step === 2 && (
									<Button
										classNames="border-green-500 text-green-500 hover:text-green-400 hover:border-green-400 m-1"
										type="submit"
									>
										Submit
									</Button>
								)}
							</div>
						</fieldset>
					</form>
				</Container>
			</Section>
		</Layout>
	);
}
