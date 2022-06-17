import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
	return (
		<footer>
			<a href='#' className='footer__logo'>
				SAGAR
			</a>

			<ul className='permalinks'>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#experience'>Experience</a>
				</li>
				<li>
					<a href='#portfolio'>Portfolio</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>

			<div className='footer__socials'>
				<a href='https://twitter.com/Sagar_Maheshh' target='_blank'>
					<BsTwitter />
				</a>

				<a
					href='https://www.instagram.com/_sagar_maheshwari/?hl=en'
					target='_blank'
				>
					{" "}
					<BsInstagram />
				</a>
			</div>

			<div className='footer__copyright'>
				<small>Made with ❤️</small>
			</div>
		</footer>
	);
};

export default Footer;
