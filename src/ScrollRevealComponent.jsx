import React, { useEffect } from "react";

const ScrollRevealComponent = () => {
	useEffect(() => {
		const sr = window.ScrollReveal();
		sr.reveal(".top,.heading", {
			reset: false,
			delay: 200,
			distance: "50px",
			origin: "top",
			duration: 2000,
		});
		sr.reveal(".middle", {
			reset: false,
			delay: 400,
			distance: "50px",
			origin: "top",
			duration: 2000,
		});
		sr.reveal(".bottom", {
			reset: false,
			delay: 600,
			distance: "50px",
			origin: "top",
			duration: 2000,
		});
	}, []);

	return (
		<div>
			<div className='top'></div>
			<div className='middle'></div>
			<div className='bottom'></div>
		</div>
	);
};

export default ScrollRevealComponent;
