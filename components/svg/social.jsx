export default function Social({ type, width, height }) {
	return (
		<div className="fade-in">
			{type === "facebook" && (
				<svg
					style={{ fill: "currentColor" }}
					className="m-1 p-1"
					xmlns="http://www.w3.org/2000/svg"
					width={width}
					height={height}
					viewBox="0 0 124 124"
				>
					<path
						id="Subtraction_1"
						data-name="Subtraction 1"
						d="M116,124H8a8.009,8.009,0,0,1-8-8V8A8.009,8.009,0,0,1,8,0H116a8.009,8.009,0,0,1,8,8V116A8.009,8.009,0,0,1,116,124ZM59.625,46.107v17.66H70.2v51.245H91.376V63.765H105.5l1.872-17.66h-16l.024-8.839c0-2.151.079-4.033,1.044-5.264.981-1.252,2.831-1.81,6-1.81h8.831V12.53H93.146c-8.248,0-14.082,1.99-17.836,6.084C71.874,22.363,70.2,27.888,70.2,35.5v10.6Z"
					/>
				</svg>
			)}
			{type === "github" && (
				<svg
					style={{ fill: "currentColor" }}
					className="m-1 p-1"
					xmlns="http://www.w3.org/2000/svg"
					width={width}
					height={height}
					viewBox="0 0 124 120.862"
				>
					<g
						id="Group_2"
						data-name="Group 2"
						transform="translate(-9.04 -9.04)"
					>
						<path
							id="Path_5"
							data-name="Path 5"
							d="M51.607,129.9a5.388,5.388,0,0,0,3.259-4.949V110.4a13.884,13.884,0,0,1,.111-1.644c-.038.011-.073.019-.111.027h-9.7c-4.043,0-7.548-1.617-9.165-4.852-1.887-3.5-2.7-9.435-7.548-12.67-.809-.539-.27-1.348,1.348-1.348,1.617.27,5.122,2.426,7.278,5.391,2.426,2.965,4.852,5.391,9.165,5.391,6.7,0,10.3-.337,12.459-1.5,2.518-3.744,6-6.591,9.645-6.591v-.067C53.065,92.047,43.3,86.969,38.76,79.127a162.688,162.688,0,0,0-23.39,1.906q-.235-1.322-.407-2.661a165.136,165.136,0,0,1,22.5-1.925,22,22,0,0,1-.784-2.289,174.2,174.2,0,0,0-22.069.261c-.054-.895-.127-1.787-.137-2.693a176.614,176.614,0,0,1,21.614-.3,26.5,26.5,0,0,1-.35-4.159,23.209,23.209,0,0,1,4.583-13.478C38.965,49.208,37.078,39.5,40.852,36A22.452,22.452,0,0,1,55.678,41.66,39.949,39.949,0,0,1,71.04,38.692a37.681,37.681,0,0,1,15.1,2.965A22.452,22.452,0,0,1,100.962,36c4.043,3.774,1.887,13.478.539,17.791a20.684,20.684,0,0,1,4.313,13.478,26.886,26.886,0,0,1-.3,3.8,178.07,178.07,0,0,1,22.115.275c-.005.908-.089,1.8-.137,2.693a174.653,174.653,0,0,0-22.533-.24,22.3,22.3,0,0,1-.876,2.642,167.549,167.549,0,0,1,23.042,1.857q-.174,1.342-.407,2.661a164.282,164.282,0,0,0-23.935-1.838C98.3,86.872,88.716,91.932,73.736,92.522v.084c7.009,0,13.478,10.513,13.478,17.791v14.557a5.388,5.388,0,0,0,3.259,4.949,62,62,0,1,0-38.866,0Z"
						/>
					</g>
				</svg>
			)}
			{type === "linkedin" && (
				<svg
					style={{ fill: "currentColor" }}
					className="m-1 p-1"
					xmlns="http://www.w3.org/2000/svg"
					width={width}
					height={height}
					viewBox="0 0 124 124"
				>
					<path
						id="Path_6"
						data-name="Path 6"
						d="M0,124V0H124V124Z"
						fill="none"
					/>
					<g id="Group_3" data-name="Group 3" transform="translate(0.001)">
						<path
							id="Path_7"
							data-name="Path 7"
							d="M112.637,0H11.363A11.466,11.466,0,0,0,0,11.363V112.637A11.466,11.466,0,0,0,11.363,124H112.637A11.466,11.466,0,0,0,124,112.637V11.363A11.466,11.466,0,0,0,112.637,0ZM36.167,103.333H15.5V46.5H36.167ZM25.834,39.779c-6.2,0-10.333-4.137-10.333-9.3,0-5.671,4.137-9.809,10.333-9.809s10.333,4.137,10.333,9.3c0,5.671-4.137,9.809-10.333,9.809ZM108.5,103.333H87.833v-31C87.833,64.058,82.142,62,80.608,62c-1.554,0-8.275,1.029-8.275,10.333v31H51.667V46.5H72.333v8.275c3.108-4.662,8.275-8.275,18.083-8.275S108.5,54.25,108.5,72.333Z"
							transform="translate(-0.001)"
						/>
					</g>
				</svg>
			)}
			{type === "twitch" && (
				<svg
					style={{ fill: "currentColor" }}
					className="m-1 p-1"
					xmlns="http://www.w3.org/2000/svg"
					width={width}
					height={height}
					viewBox="0 0 118.095 124"
				>
					<g
						id="Group_4"
						data-name="Group 4"
						transform="translate(-18.833 -18.833)"
					>
						<path
							id="Path_9"
							data-name="Path 9"
							d="M38.693,18.833,18.833,46.212v78.907H48.357v17.714H66.071l17.714-17.714H107.4L136.928,95.6V18.833Zm3.76,11.81h82.666V83.786L107.4,101.5H77.881L60.166,119.214V101.5H42.452ZM71.976,48.357V77.881H83.785V48.357Zm29.524,0V77.881H113.31V48.357Z"
						/>
					</g>
				</svg>
			)}
			{type === "twitter" && (
				<svg
					style={{ fill: "currentColor" }}
					className="m-1 p-1"
					xmlns="http://www.w3.org/2000/svg"
					width={width}
					height={height}
					viewBox="0 0 124 100.75"
				>
					<g id="Group_5" data-name="Group 5" transform="translate(0 -18.833)">
						<path
							id="Path_11"
							data-name="Path 11"
							d="M124,30.721a46.94,46.94,0,0,1-14.471,4.137,27.5,27.5,0,0,0,11.363-13.966,47.143,47.143,0,0,1-16,6.216,27.05,27.05,0,0,0-19.113-8.275A25.353,25.353,0,0,0,60.446,44.142a19.114,19.114,0,0,0,.525,5.691A70.678,70.678,0,0,1,8.779,23.475C6.2,27.108,5.167,31.75,5.167,36.392A25.908,25.908,0,0,0,16.529,57.583,36.745,36.745,0,0,1,5.167,54.475V55c0,12.392,8.779,22.725,20.142,24.8a26.531,26.531,0,0,1-6.7,1.029,14.167,14.167,0,0,1-4.662-.525A24.525,24.525,0,0,0,37.721,97.887,51.655,51.655,0,0,1,6.2,108.725a25.709,25.709,0,0,1-6.2-.5,72.39,72.39,0,0,0,38.75,11.363c47.025,0,72.333-38.75,72.333-72.333V44.142A53.047,53.047,0,0,0,124,30.721"
							transform="translate(0 0)"
						/>
					</g>
				</svg>
				
			)}
		</div>
	);
}
