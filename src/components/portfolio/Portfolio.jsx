import React from "react";
import proshop from "../../assets/proshop.png";
import dev from "../../assets/dev.png";
import jobify from "../../assets/jobify.png";
import memories from "../../assets/memories.png";
import shoppy from "../../assets/shoppy.png";
import "./portfolio.css";

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className='container portfolio__container'>
				<article className='portfolio__item'>
					<div className='portfolio__item-image'>
						<img src={proshop} alt='' />
					</div>
					<h3>Portfolio item title</h3>

					<a
						href='https://github.com/SagarM21/proShop'
						className='btn'
						target='_blank'
					>
						GitHub
					</a>
					<a
						href='https://proshop-e-commerce.herokuapp.com/'
						className='btn btn-primary'
						target='_blank'
					>
						Live Demo
					</a>
				</article>
				<article className='portfolio__item'>
					<div className='portfolio__item-image'>
						<img src={dev} alt='' />
					</div>
					<h3>Portfolio item title</h3>

					<a
						href='https://github.com/SagarM21/DevConnector'
						className='btn'
						target='_blank'
					>
						GitHub
					</a>
					<a
						href='https://idev-connector.herokuapp.com/'
						className='btn btn-primary'
						target='_blank'
					>
						Live Demo
					</a>
				</article>
				<article className='portfolio__item'>
					<div className='portfolio__item-image'>
						<img src={jobify} alt='' />
					</div>
					<h3>Portfolio item title</h3>

					<a
						href='https://github.com/SagarM21/Jobify'
						className='btn'
						target='_blank'
					>
						GitHub
					</a>
					<a
						href='https://jobify-job-tracker.herokuapp.com/landing'
						className='btn btn-primary'
						target='_blank'
					>
						Live Demo
					</a>
				</article>
				<article className='portfolio__item'>
					<div className='portfolio__item-image'>
						<img src={memories} alt='' />
					</div>
					<h3>Portfolio item title</h3>

					<a
						href='https://github.com/SagarM21/Memories-MERN'
						className='btn'
						target='_blank'
					>
						GitHub
					</a>
					<a
						href='https://recall-memories.netlify.app/'
						className='btn btn-primary'
						target='_blank'
					>
						Live Demo
					</a>
				</article>
				<article className='portfolio__item'>
					<div className='portfolio__item-image'>
						<img src={shoppy} alt='' />
					</div>
					<h3>Portfolio item title</h3>

					<a
						href='https://github.com/SagarM21/Shoppy-Dashboard'
						className='btn'
						target='_blank'
					>
						GitHub
					</a>
					<a
						href='https://shoppy-dashboard-beta.vercel.app/'
						className='btn btn-primary'
						target='_blank'
					>
						Live Demo
					</a>
				</article>
			</div>
		</section>
	);
};

export default Portfolio;
