import React from "react";

export function RoadmapEllipseGreen() {
	return (
		<svg
			width="20"
			height="20"
			fill="none"
			viewBox="0 0 16 16"
		>
			<circle cx="8" cy="8" r="8" fill="#3BBFA1"></circle>
		</svg>
	);
}

export function RoadmapEllipseOrange() {
	return (
		<svg
			width="20"
			height="20"
			fill="none"
			viewBox="0 0 20 20"
		>
			<g filter="url(#filter0_i_1361_106)">
				<circle cx="10" cy="10" r="10" fill="#EE9E4E"></circle>
			</g>
			<defs>
				<filter
					id="filter0_i_1361_106"
					width="20"
					height="21"
					x="0"
					y="0"
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
					<feBlend
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					></feBlend>
					<feColorMatrix
						in="SourceAlpha"
						result="hardAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					></feColorMatrix>
					<feOffset dy="1"></feOffset>
					<feGaussianBlur stdDeviation="2"></feGaussianBlur>
					<feComposite
						in2="hardAlpha"
						k2="-1"
						k3="1"
						operator="arithmetic"
					></feComposite>
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
					<feBlend in2="shape" result="effect1_innerShadow_1361_106"></feBlend>
				</filter>
			</defs>
		</svg>
	);
}


