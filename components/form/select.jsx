export default function Select({
	classNames,
	helper,
	isRequired,
	label,
	name,
	options,
}) {
	return (
		<div className={`${classNames ?? ""} flex-1 mb-2`}>
			<label className="flex flex-wrap p-1" htmlFor={name}>
				<div className="w-full mx-1 px-2">{label}</div>
				<select
					className="text-xs sm:text-base flex-1 border px-2 py-1 rounded-sm bg-transparent"
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
		</div>
	);
}
