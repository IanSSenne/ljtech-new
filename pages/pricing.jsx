import Head from "next/head";
import Layout from "../components/template/layout";

export default function Pricing() {
	return (
		<Layout>
			<Head>
				<title>ljtech.ca</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section className="bg-dark dark:bg-light text-light dark:text-dark py-8 sm:py-12 md:py-16">
				<h1>Plans &amp; Pricing</h1>
				<table>
					<tr>
						<th className="border-b p-2"></th>
						<th className="border-b p-2">Basic</th>
						<th className="border-b p-2 bg-gray-100">Business</th>
						<th className="border-b p-2">Enterprise</th>
					</tr>
					<tr>
						<td className="border-b p-2">
							<h2 className="text-sm font-semibold max-w-sm">
								Testing Title of Service Name Here
							</h2>
						</td>
						<td className="border-b p-2">Something here</td>
						<td className="border-b p-2 bg-gray-100">Something here</td>
						<td className="border-b p-2">Something here</td>
					</tr>
					<tr>
						<td className="border-b p-2">
							<h2 className="text-sm font-semibold max-w-sm">
								Testing Title of Service Name Here
							</h2>
						</td>
						<td className="border-b p-2">Something here</td>
						<td className="border-b p-2 bg-gray-100">Something here</td>
						<td className="border-b p-2">Something here</td>
					</tr>
					<tr>
						<td className="border-b p-2">
							<h2 className="text-sm font-semibold max-w-sm">
								Testing Title of Service Name Here
							</h2>
						</td>
						<td className="border-b p-2">Something here</td>
						<td className="border-b p-2 bg-gray-100">Something here</td>
						<td className="border-b p-2">Something here</td>
					</tr>
					<tr>
						<td className="border-b p-2">
							<h2 className="text-sm font-semibold max-w-sm">
								Testing Title of Service Name Here
							</h2>
						</td>
						<td className="border-b p-2">Something here</td>
						<td className="border-b p-2 bg-gray-100">Something here</td>
						<td className="border-b p-2">Something here</td>
					</tr>
				</table>
			</section>

			<section className="py-8 sm:py-12 md:py-16"></section>
		</Layout>
	);
}
