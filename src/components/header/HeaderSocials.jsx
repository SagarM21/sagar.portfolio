import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a href='https://github.com/SagarM21' target='_blank'>
				<FaGithub />{" "}
			</a>
			<a
				href='https://www.linkedin.com/in/sagar-maheshwari-3330b6166/'
				target='_blank'
			>
				<BsLinkedin />
			</a>
			<a href='https://twitter.com/Sagar_M21' target='_blank'>
				<BsTwitter />
			</a>
		</div>
	);
};

export default HeaderSocials;
