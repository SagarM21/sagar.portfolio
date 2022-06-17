import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		
	};
	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdOutlineEmail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>sgr.mhshwr22@gmail.com</h5>
						<a href='mailto:sgr.mhshwr22@gmail.com' target='_blank'>
							Send a message
						</a>
					</article>

					<article className='contact__option'>
						<FaDiscord className='contact__option-icon' />
						<h4>Discord</h4>
						<h5>Sagar#8028</h5>
						<a
							href='https://discord.com/users/533312254049779733'
							target='_blank'
						>
							Send a message
						</a>
					</article>

					<article className='contact__option'>
						<BsWhatsapp className='contact__option-icon' />
						<h4>WhatsApp</h4>
						<h5>+91 8619006139</h5>
						<a
							href='https://api.whatsapp.com/send?phone=8619006139'
							target='_blank'
						>
							Send a message
						</a>
					</article>
				</div>
				{/* END OF CONTACT OPTIONS */}
				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='name'
						placeholder='Your Full Name'
						required
					/>
					<input type='email' name='email' placeholder='Your Email' required />
					<textarea
						name='message'
						rows='7'
						placeholder='Your Message'
						required
					></textarea>
					<button type='submit' className='btn btn-primary'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
