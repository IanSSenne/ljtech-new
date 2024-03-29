import styles from "@styles/aurora.module.css";

const colors = {
	outline: ["#82cfac", "#d8b4fe", "#f9a8d4", "#ddd"],
	colorA: ["#1da96a", "#8b5cf6", "#ec4899", "#ddd"],
	colorB: ["#05a05a", "#7c3aed", "#db2777", "#ddd"],
	colorC: ["#36b37a", "#a78bfa", "#f472b6", "#ddd"],
	colorD: ["#049051", "#6d28d9", "#be185d", "#ddd"],
};

export default function Logo({
	before,
	children,
	classNames,
	style,
	type,
	width,
	height,
	color,
}) {
	const index = () => {
		if (color === "gray") {
			return 3;
		} else if (color === "pink") {
			return 2;
		} else if (color === "purple") {
			return 1;
		} else {
			return 0;
		}
	};

	return (
		<div style={style} className={`${classNames ?? ""} flex fade-in`}>
			{before}
			{!type && color && (
				<svg
					className={`${classNames ?? ""} inline-flex`}
					xmlns="http://www.w3.org/2000/svg"
					width={width}
					height={height}
					viewBox="0 0 54.275 77"
				>
					<g id="ljtech" transform="translate(0 0.002)">
						<path
							id="outline"
							data-name="outline"
							d="M27.132,77a5.4,5.4,0,0,1-3.622-1.4L1.792,56.068A5.464,5.464,0,0,1,0,52.1V24.959A5.439,5.439,0,0,1,1.792,20.93L23.51,1.4a5.4,5.4,0,0,1,7.256,0L52.471,20.918a5.452,5.452,0,0,1,1.8,4.041V52.1a5.439,5.439,0,0,1-1.8,4.028L30.766,75.6A5.414,5.414,0,0,1,27.132,77ZM2.72,21.96a4.028,4.028,0,0,0-1.271,3V52.1a4.028,4.028,0,0,0,1.334,3L24.437,74.571a4.028,4.028,0,0,0,5.4,0L51.544,55.039A4.041,4.041,0,0,0,52.891,52.1V24.959a4.041,4.041,0,0,0-1.347-3L29.838,2.428a4.028,4.028,0,0,0-5.4,0Z"
							fill={colors.outline[index()]}
						/>
						<path
							id="Path_153"
							data-name="Path 153"
							d="M3.706,22.059,23.619,4.128a4.333,4.333,0,0,1,5.808,0l19.9,17.931A4.333,4.333,0,0,1,50.776,25.3V50.093a4.321,4.321,0,0,1-1.436,3.228L29.427,71.239a4.333,4.333,0,0,1-5.808,0L3.706,53.321A4.321,4.321,0,0,1,2.27,50.093V25.261a4.359,4.359,0,0,1,1.436-3.2Z"
							transform="translate(0.615 0.816)"
							fill={colors.colorA[index()]}
						/>
						<path
							id="Path_154"
							data-name="Path 154"
							d="M26.452,17,2.662,19.542a1.2,1.2,0,0,1-.152.381l23.942,30.83Z"
							transform="translate(0.68 4.604)"
							fill={colors.colorB[index()]}
						/>
						<path
							id="Path_155"
							data-name="Path 155"
							d="M3.6,42.879l2.8,2.542L23.516,60.8a4.13,4.13,0,0,0,1.372.826,4.257,4.257,0,0,0,1.525.28V44.112L2.65,41.57A4.13,4.13,0,0,0,3.6,42.879Z"
							transform="translate(0.718 11.257)"
							fill={colors.colorC[index()]}
						/>
						<path
							id="Path_156"
							data-name="Path 156"
							d="M44.161,22.062,24.26,4.131l-.2-.152A4.384,4.384,0,0,0,21.35,3V20.791l23.7,2.542A4.473,4.473,0,0,0,44.161,22.062Z"
							transform="translate(5.782 0.813)"
							fill={colors.colorC[index()]}
						/>
						<path
							id="Path_157"
							data-name="Path 157"
							d="M21.35,50.752l23.8-2.542c0-.114.114-.254.152-.369L21.35,17Z"
							transform="translate(5.782 4.604)"
							fill={colors.colorD[index()]}
						/>
					</g>
				</svg>
			)}
			{type === "disco" && (
				<svg
					className={`${classNames ?? ""} inline-flex`}
					xmlns="http://www.w3.org/2000/svg"
					width={width}
					height={height}
					viewBox="0 0 54.275 77"
				>
					<g id="ljtech" transform="translate(0 0.002)">
						<path
							id="outline"
							data-name="outline"
							d="M27.132,77a5.4,5.4,0,0,1-3.622-1.4L1.792,56.068A5.464,5.464,0,0,1,0,52.1V24.959A5.439,5.439,0,0,1,1.792,20.93L23.51,1.4a5.4,5.4,0,0,1,7.256,0L52.471,20.918a5.452,5.452,0,0,1,1.8,4.041V52.1a5.439,5.439,0,0,1-1.8,4.028L30.766,75.6A5.414,5.414,0,0,1,27.132,77ZM2.72,21.96a4.028,4.028,0,0,0-1.271,3V52.1a4.028,4.028,0,0,0,1.334,3L24.437,74.571a4.028,4.028,0,0,0,5.4,0L51.544,55.039A4.041,4.041,0,0,0,52.891,52.1V24.959a4.041,4.041,0,0,0-1.347-3L29.838,2.428a4.028,4.028,0,0,0-5.4,0Z"
							className={styles.outline}
						/>
						<path
							id="Path_153"
							data-name="Path 153"
							d="M3.706,22.059,23.619,4.128a4.333,4.333,0,0,1,5.808,0l19.9,17.931A4.333,4.333,0,0,1,50.776,25.3V50.093a4.321,4.321,0,0,1-1.436,3.228L29.427,71.239a4.333,4.333,0,0,1-5.808,0L3.706,53.321A4.321,4.321,0,0,1,2.27,50.093V25.261a4.359,4.359,0,0,1,1.436-3.2Z"
							transform="translate(0.615 0.816)"
							className={styles.colorA}
						/>
						<path
							id="Path_154"
							data-name="Path 154"
							d="M26.452,17,2.662,19.542a1.2,1.2,0,0,1-.152.381l23.942,30.83Z"
							transform="translate(0.68 4.604)"
							className={styles.colorB}
						/>
						<path
							id="Path_155"
							data-name="Path 155"
							d="M3.6,42.879l2.8,2.542L23.516,60.8a4.13,4.13,0,0,0,1.372.826,4.257,4.257,0,0,0,1.525.28V44.112L2.65,41.57A4.13,4.13,0,0,0,3.6,42.879Z"
							transform="translate(0.718 11.257)"
							className={styles.colorC}
						/>
						<path
							id="Path_156"
							data-name="Path 156"
							d="M44.161,22.062,24.26,4.131l-.2-.152A4.384,4.384,0,0,0,21.35,3V20.791l23.7,2.542A4.473,4.473,0,0,0,44.161,22.062Z"
							transform="translate(5.782 0.813)"
							className={styles.colorD}
						/>
						<path
							id="Path_157"
							data-name="Path 157"
							d="M21.35,50.752l23.8-2.542c0-.114.114-.254.152-.369L21.35,17Z"
							transform="translate(5.782 4.604)"
							className={styles.colorE}
						/>
					</g>
				</svg>
			)}
			{type === "outline" && (
				<svg
					className={`${classNames ?? ""}`}
					xmlns="http://www.w3.org/2000/svg"
					width={width}
					height={height}
					viewBox="0 0 54.202 76.896"
				>
					<path
						id="outline"
						data-name="outline"
						d="M27.132,77a5.4,5.4,0,0,1-3.622-1.4L1.792,56.068A5.464,5.464,0,0,1,0,52.1V24.959A5.439,5.439,0,0,1,1.792,20.93L23.51,1.4a5.4,5.4,0,0,1,7.256,0L52.471,20.918a5.452,5.452,0,0,1,1.8,4.041V52.1a5.439,5.439,0,0,1-1.8,4.028L30.766,75.6A5.414,5.414,0,0,1,27.132,77ZM2.72,21.96a4.028,4.028,0,0,0-1.271,3V52.1a4.028,4.028,0,0,0,1.334,3L24.437,74.571a4.028,4.028,0,0,0,5.4,0L51.544,55.039A4.041,4.041,0,0,0,52.891,52.1V24.959a4.041,4.041,0,0,0-1.347-3L29.838,2.428a4.028,4.028,0,0,0-5.4,0Z"
						fill="#ddd"
					/>
				</svg>
			)}
			{children}
		</div>
	);
}
