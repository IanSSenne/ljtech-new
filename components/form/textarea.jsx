export default function Textarea({
	classNames,
	handleChange,
	helper,
	isRequired,
	label,
	min,
	max,
	name,
	placeholder,
	cols,
	rows,
}) {
	return (
		<div className={`${classNames ?? ""} flex-1 mb-2`}>
			<label className="flex flex-wrap p-1" htmlFor={name}>
				<div className="w-full px-2">{label}</div>
				<textarea
					style={{ minHeight: "100px", maxHeight: "200px", resize: "vertical" }}
					className="flex-1 border px-2 py-1 rounded-sm bg-transparent"
					id={name}
					name={name}
					cols={cols}
					rows={rows}
					placeholder={placeholder}
					min={min}
					max={max}
					required={isRequired}
					onChange={handleChange}
				></textarea>
			</label>
			<div className="opacity-60 text-sm font-semibold px-2 pb-1">{helper}</div>
		</div>
	);
}
