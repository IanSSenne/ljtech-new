export default function Inputfield({
	style,
	classNames,
	legend,
	name,
	type,
	placeholder,
	min,
	step,
	max,
	defaultValue,
	handleChange,
	isRequired,
	helper,
}) {
	return (
		<fieldset className={`${classNames} flex-1 border rounded-sm mb-2`}>
			<legend className="mx-1 px-2">{legend}</legend>
			<label className="flex p-1" htmlFor={name}>
				<input
					style={style}
					className="flex-1 border px-2 py-1 rounded-sm bg-transparent"
					id={name}
					name={name}
					type={type}
					placeholder={placeholder}
					min={min}
					step={step}
					max={max}
					defaultValue={defaultValue}
					onChange={handleChange}
					required={isRequired}
				/>
			</label>
			<div className="opacity-60 text-sm font-semibold px-2 pb-1">{helper}</div>
		</fieldset>
	);
}
