import React from "react";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";
import "./about.css";

const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__image-me'>
						<img src={ME} alt='About image' />
					</div>
				</div>
				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>Next Developer - Doosra College</small>
							<br />
							<small>React Developer - FroshLink</small>
						</article>

						<article className='about__card'>
							<VscFolderLibrary className='about__icon' />
							<h5>Projects</h5>
							<small>10+ Completed Projects</small>
						</article>

						<article className='about__card'>
							<FiUsers className='about__icon' />
							<h5>Clients</h5>
							<small>In making...</small>
						</article>
					</div>

					<p>"No code has zero defects."</p>

					<a href='#contact' className='btn btn-primary'>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
