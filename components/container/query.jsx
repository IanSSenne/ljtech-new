export default function Query({ questions }) {
	return (
		<div className="p-2 grid md:gap-2 md:grid-cols-2 max-w-3xl mx-auto">
			{questions.map((question, i) => (
				<div key={i} className="pb-4">
					<div className="flex content-center items-center justify-start bg-white dark:bg-dark text-blue-500 rounded-t-sm border-l border-t border-r p-2">
						<span className="text-3xl font-black px-2">Q.</span>
						<h2 className="font-bold">{question.question}</h2>
					</div>
					<div className="flex bg-gray-200 dark:bg-dark rounded-b-sm border p-2">
						<span className="text-3xl font-black opacity-50 px-2">A.</span>
						<p>{question.answer}</p>
					</div>
				</div>
			))}
		</div>
	);
}
