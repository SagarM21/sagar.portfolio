import React from "react";
import "./testimonials.css";

const Testimonials = () => {
	return (
		<section id='testimonials'>
			<h5>Review from Clients</h5>
			<h2>Testimonials</h2>

			<div className='container testimonials__container'>
				<article className='testimonial'>
					<div className='client__avatar'>
						<img src='' alt='' />
					</div>
					<h5 className='client__name'>Name</h5>
					<small className='client__review'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
						ducimus. Explicabo libero, impedit velit eos temporibus consequatur
						deserunt magnam, totam ab similique assumenda facilis, tempora
						corporis reiciendis qui autem! Aliquid?
					</small>
				</article>
			</div>
		</section>
	);
};

export default Testimonials;
