export default function Section({ children, dark }) {
	if (dark === true) {
		return (
			<section className="bg-dark dark:bg-light text-light dark:text-dark py-8 sm:py-12 md:py-16">
				{children}
			</section>
		);
	} else {
		return <section className="py-8 sm:py-12 md:py-16">{children}</section>;
	}
}
