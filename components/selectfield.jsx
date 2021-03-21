export default function Inputfield({
	classNames,
	helper,
	isRequired,
	legend,
	name,
	options,
}) {
	return (
		<fieldset className={`${classNames} flex-1 border rounded-sm mb-2`}>
			<legend className="mx-1 px-2">{legend}</legend>
			<label className="flex p-1" htmlFor={name}>
				<select
					className="flex-1 border px-2 py-1 rounded-sm bg-transparent"
					id={name}
					name={name}
					required={isRequired}
				>
					{options.map((option, i) => (
						<option
							className="dark:bg-dark"
							key={`${option}${i}`}
							value={option}
						>
							{option}
						</option>
					))}
				</select>
			</label>
			<div className="opacity-60 text-sm font-semibold px-2 pb-1">{helper}</div>
		</fieldset>
	);
}
