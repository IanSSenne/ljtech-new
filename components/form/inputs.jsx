export default function Inputs({
	fields,
	style,
	classNames,
	label,
	title,
	type,
	placeholder,
	min,
	max,
	minFields,
	maxFields,
	handleRemove,
	handleChange,
	handleAdd,
	isRequired,
	helper,
}) {
	return (
		<div className={`${classNames ?? ""} flex-1 mb-2`}>
			<h2 className="px-2">Have online competitors? Link them:</h2>
			<ul>
				{fields.map((field, i) => (
					<li className="flex flex-wrap flex-1 mb-2" key={i}>
						<label className="w-full px-2" htmlFor={`url${i}`}>
							{label} #{i + 1}
						</label>
						<input
							style={style}
							className={`${
								fields.length > minFields
									? "border-t border-b border-l rounded-l-sm px-2 py-1 flex-1 bg-transparent"
									: "border rounded-sm px-2 py-1 flex-1 bg-transparent"
							}`}
							name={`url${i}`}
							id={`url${i}`}
							type={type}
							onChange={(e) => handleChange(e, i)}
							placeholder={placeholder}
							value={fields[i]}
							min={min}
							max={max}
							required={isRequired}
						/>
						{fields.length > minFields && (
							<button
								onClick={(e) => handleRemove(e, i)}
								style={{ height: "2.125rem" }}
								className="border-red-500 text-red-500 border w-6 rounded-r-sm"
							>
								-
							</button>
						)}
					</li>
				))}
				{fields.length <= maxFields && (
					<div className="text-right">
						<button
							onClick={handleAdd}
							className="border-purple-500 text-purple-500 border px-2 py-1 rounded-sm"
						>
							Add +
						</button>
					</div>
				)}
			</ul>
			<div className="opacity-60 px-2 text-sm">{helper}</div>
		</div>
	);
}
