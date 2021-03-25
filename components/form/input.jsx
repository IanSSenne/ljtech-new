export default function Input({
	style,
	classNames,
	label,
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
		<div className={`${classNames ?? ""} flex-1 mb-2`}>
			<label className="flex flex-wrap p-1" htmlFor={name}>
				<div className="w-full mx-1 px-2">{label}</div>
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
		</div>
	);
}
