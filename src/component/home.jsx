import React from "react";
import { useEffect } from "react";
const Home = () => {
	useEffect(() => {
		window.addEventListener("scroll", () => {
			let scrollY = window.scrollY;
			document.documentElement.style.setProperty("--scrollTop", `${scrollY}px`);
		});
	}, []);

	return (
		<>
			<div className='wrapper'>
				<div className='content'>
					<header className='header-main relative'>
						<div className='layers flex justify-center items-center h-screen text-center relative overflow-hidden'>
							<div className='layer-head'>
								<div className='caption lm:text-xl'>Welcome to</div>
								<div className='title text-4xl lm:text-6xl'>Dark Forest</div>
							</div>
							<div className='img-layer layer-base bg-baseImg'></div>
							<div className='img-layer layer-mid bg-middleImg'></div>
							<div className='img-layer layer-front bg-frontImg'></div>
						</div>
					</header>
					<article className='article-main bg-dungeonImg bg-cover bg-center flex justify-center items-center text-center relative z-10 top-[-2px] min-h-screen'>
						<div className='m-article-content'>
							<h2 className='m-header uppercase'>
								This is an Parallax Website
							</h2>
							<p className='m-para'>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
								dolorum odit voluptate maiores, praesentium architecto laborum
								eligendi magni similique quae maxime repudiandae ipsum quibusdam
								omnis debitis ut repellendus fugiat ex! Doloribus odit veniam
								nihil voluptates a asperiores quisquam aspernatur, officia
								adipisci voluptas fugit quaerat voluptate, debitis expedita
								impedit, ipsam numquam doloremque! Debitis consectetur at
								eveniet ipsum nisi? Amet in neque asperiores repellendus magni
								fugit dolorum dolore voluptatum quisquam, ipsam officiis.
							</p>
						</div>
					</article>
				</div>
			</div>
		</>
	);
};

export default Home;
