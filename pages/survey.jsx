import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/template/layout";
import Button from "../components/button";
import Toggle from "../components/toggle";
import Inputfield from "../components/inputfield";
import Textfield from "../components/textfield";
import Selectfield from "../components/selectfield";
import Multifield from "../components/multifield";
import Steps from "../components/steps";

const options = [
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
		console.log(e.target.value);
		console.log(newTarget);
		const newArray = [...fields];
		newArray[i] = newTarget;
		setFields(newArray);
	};

	const removeFields = (e, i) => {
		e.preventDefault();
		const newArray = [...fields];
		newArray.splice(i, 1);
		setFields(newArray);
		console.log(fields);
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

	useEffect(() => {
		console.log(step);
	});

	return (
		<Layout>
			<Head>
				<title>ljtech.ca survey</title>
			</Head>
			<section className="py-8 sm:py-12 md:py-16">
				<Steps step={step} />
				<div className="max-w-lg w-full mx-auto">
					<form onSubmit={(e) => handleForm(e)} className="p-1">
						{/* first part */}
						{step === 0 && (
							<div>
								<div className="md:flex md:space-x-2">
									<Inputfield
										legend="First name"
										name="first"
										type="text"
										placeholder="John"
										max={30}
										helper="Enter your first name."
										isRequired={true}
									/>
									<Inputfield
										legend="Last name"
										name="last"
										type="text"
										placeholder="Smith"
										max={30}
										helper="Enter your last name."
										isRequired={true}
									/>
								</div>
								<div className="md:flex md:space-x-2">
									<Inputfield
										legend="Email address"
										name="email"
										type="email"
										placeholder="exmaple@email.com"
										helper="Enter your email address."
										isRequired={true}
									/>
									<Inputfield
										legend="Phone number"
										name="tel"
										type="tel"
										placeholder="(555) 555-4545"
										helper="Enter your tel number."
										isRequired={true}
									/>
								</div>
							</div>
						)}
						{/* second part */}
						{step === 1 && (
							<div>
								<div className="flex content-center items-center justify-center">
									<div>Old Project</div>
									<Toggle
										on={"bg-green-500 border-green-800"}
										off={"bg-gray-200"}
										handleChange={handleProject}
										isActive={active}
									/>
									<div>New Project</div>
								</div>
								{active ? (
									<Inputfield
										legend="Project name"
										name="project"
										type="text"
										placeholder="new-project.com"
										helper="Enter your new project name."
										isRequired={true}
									/>
								) : (
									<Inputfield
										legend="Website name"
										name="project"
										type="text"
										placeholder="website.com"
										helper="Enter your current websites url."
										isRequired={true}
									/>
								)}
								<Textfield
									legend="Your goals"
									name="goals"
									placeholder="What are your goals for this project?"
									handleChange={(e) => setCount(2000 - e.target.value.length)}
									helper={`Characters remaining: ${count}`}
									isRequired={false}
								/>
								<div className="flex flex-wrap space-x-2">
									<Inputfield
										legend="Page count"
										name="pages"
										type="number"
										placeholder="1"
										min={1}
										max={1000}
										helper="Estimate project size."
										isRequired={true}
									/>
									<Inputfield
										legend="Project deadline"
										name="deadline"
										type="date"
										helper="Enter your project deadline."
										isRequired={true}
									/>
								</div>
							</div>
						)}
						{/* part 3 */}
						{step === 2 && (
							<div>
								<Selectfield
									legend="Business size"
									name="business"
									helper="Enter your businesses size."
									isRequired={true}
									options={options}
								/>
								<Inputfield
									style={{ padding: "0", border: "none", height: "40px" }}
									legend="Brand color"
									name="color"
									type="color"
									helper="Enter your brand color."
									isRequired={true}
								/>
								<Inputfield
									style={{
										padding: "0",
										border: "none",
									}}
									legend="Budget"
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
								<Multifield
									legend="Competitor Websites"
									fields={fields}
									type="url"
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
						<div className="grid grid-cols-2 gap-x-2">
							{step === 0 && <div></div>}
							{step >= 1 && (
								<Button
									classNames="border-blue-500 text-blue-500 hover:text-blue-400 hover:border-blue-400"
									handleClick={(e) => backStep(e)}
								>
									Back
								</Button>
							)}
							{step >= 0 && step < 2 && (
								<Button
									classNames="border-blue-500 text-blue-500 hover:text-blue-400 hover:border-blue-400"
									handleClick={(e) => nextStep(e)}
								>
									Next
								</Button>
							)}
							{step === 2 && <Button type="submit">Submit</Button>}
						</div>
					</form>
				</div>
			</section>
		</Layout>
	);
}
