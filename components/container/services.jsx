const Services = ({ services }) => (
	<ul className="p-2">
		{services.map((service, i) => (
			<li
				key={`service${i}`}
				id={service.id}
				className="md:flex md:space-x-4 p-2 border-b"
			>
				<div className="font-black md:w-20 md:text-xs text-right">
					#{service.name}
				</div>
				<div className="flex-1 text-justify">{service.description}</div>
			</li>
		))}
	</ul>
);

export default Services;
