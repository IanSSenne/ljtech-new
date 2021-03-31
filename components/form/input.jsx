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
		<div className={`${classNames ?? ""} flex flex-wrap flex-1 mb-2`}>
			<label className="w-full px-2" htmlFor={name}>
				{label}
			</label>
			<input
				style={style}
				className="flex-1 border mx-1 px-2 py-1 rounded-sm bg-transparent"
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
			<div className="w-full opacity-60 text-sm font-semibold px-2 pb-1">
				{helper}
			</div>
		</div>
	);
}
