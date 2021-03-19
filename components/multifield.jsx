export default function Multifield({
	fields,
	style,
	classNames,
	legend,
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
		<fieldset className={`${classNames} flex-1 border rounded-sm mb-2`}>
			<legend className="mx-1 px-2">{legend}</legend>
			<ul>
				{fields.map((field, i) => (
					<li className="flex" key={`field${i}`}>
						<label htmlFor={name} className="flex flex-1">
							<input
								style={style}
								className="px-2 py-1 w-full bg-transparent"
								name={`${name}${[i]}`}
								id={`${name}${[i]}`}
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
						<button onClick={handleAdd} className="w-6 h-8 rounded-sm">
							+
						</button>
					</div>
				)}
			</ul>
			<div className="opacity-60 px-2 text-sm">{helper}</div>
		</fieldset>
	);
}
