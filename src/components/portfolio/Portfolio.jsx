import React from "react";
import proshop from "../../assets/proshop.png";
import dev from "../../assets/dev.png";
import jobify from "../../assets/jobify.png";
import memories from "../../assets/memories.png";
import shoppy from "../../assets/shoppy.png";
import krypt from "../../assets/krypt.png";
import "./portfolio.css";

const data = [
	{
		id: 1,
		image: proshop,
		title: "E-Commerce App with paypal",
		github: "https://github.com/SagarM21/proShop",
		demo: "https://proshop-e-commerce.herokuapp.com/",
	},
	{
		id: 2,
		image: dev,
		title: "A webapp to connect developers",
		github: "https://github.com/SagarM21/DevConnector",
		demo: "https://idev-connector.herokuapp.com/",
	},
	{
		id: 3,
		image: jobify,
		title: "Jobify - track your job status",
		github: "https://github.com/SagarM21/Jobify",
		demo: "https://jobify-job-tracker.herokuapp.com/landing",
	},
	{
		id: 4,
		image: memories,
		title: "Save your beautiful Memories",
		github: "https://github.com/SagarM21/Memories-MERN",
		demo: "https://recall-memories.netlify.app/",
	},
	{
		id: 5,
		image: shoppy,
		title: "React Admin Dashboard",
		github: "https://github.com/SagarM21/Shoppy-Dashboard",
		demo: "https://shoppy-dashboard-beta.vercel.app/",
	},
	{
		id: 6,
		image: krypt,
		title: "Krypt - Send Crypto across the world",
		github: "https://github.com/SagarM21/DAPP",
		demo: "https://krypt-ether.vercel.app/",
	},
];

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className='container portfolio__container'>
				{data.map(({ id, title, image, github, demo }) => {
					return (
						<article key={id} className='portfolio__item'>
							<div className='portfolio__item-image'>
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>

							<div className='portfolio__item-cta'>
								<a href={github} className='btn' target='_blank'>
									GitHub
								</a>
								<a href={demo} className='btn btn-primary' target='_blank'>
									Live Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
