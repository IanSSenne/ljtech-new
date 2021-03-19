export default function Textfield({
	legend,
	name,
	cols,
	rows,
	placeholder,
	max,
	helper,
	isRequired,
	handleChange,
}) {
	return (
		<fieldset className="w-full border rounded-sm mb-2">
			<legend className="mx-1 px-2">{legend}</legend>
			<label className="flex p-1" htmlFor={name}>
				<textarea
					style={{ minHeight: "100px", maxHeight: "200px", resize: "vertical" }}
					className="flex-1 border px-2 py-1 rounded-sm bg-transparent"
					id={name}
					name={name}
					cols={cols}
					rows={rows}
					placeholder={placeholder}
					max={max}
					required={isRequired}
					onChange={handleChange}
				></textarea>
			</label>
			<div className="opacity-60 text-sm font-semibold px-2 pb-1">{helper}</div>
		</fieldset>
	);
}
