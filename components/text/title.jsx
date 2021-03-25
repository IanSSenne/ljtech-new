const Title = ({ children, classNames }) => (
	<h2 className={`${classNames ?? ""} text-3xl text-center font-black p-2`}>
		{children}
	</h2>
);

export default Title;
