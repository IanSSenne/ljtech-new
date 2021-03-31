export default function Inputs({
	fields,
	style,
	classNames,
	label,
	name,
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
			<div className="p-1">
				<div className="flex-1 px-2">{label}</div>
				<ul>
					{fields.map((field, i) => (
						<li className="flex" key={i}>
							<label className="flex-1 flex flex-wrap" htmlFor={name}>
								<input
									style={style}
									className="px-2 py-1 w-full bg-transparent"
									name={`${name}${i}`}
									id={`${name}${i}`}
									type={type}
									id={name}
									onChange={(e) => handleChange(e, i)}
									name={name}
									placeholder={placeholder}
									value={fields[i]}
									min={min}
									max={max}
									required={isRequired}
								/>
							</label>
							{fields.length > minFields && (
								<button
									onClick={(e) => handleRemove(e, i)}
									className="w-6 h-8 rounded-sm ml-0.5"
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
								className="border-green-500 border w-6 h-8 rounded-sm"
							>
								+
							</button>
						</div>
					)}
				</ul>
				<div className="opacity-60 px-2 text-sm">{helper}</div>
			</div>
		</div>
	);
}
