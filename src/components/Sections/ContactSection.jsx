import React from 'react';
import { Section } from '../Interface.jsx';
import { useForm, ValidationError } from '@formspree/react';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';

export const ContactSection = () => {
	const [state, handleSubmit] = useForm("xwpeekwz");

	return (
		<Section>
			<div className='flex flex-col items-center justify-center my-auto '>
			<h2 className="text-3xl md:text-5xl text-white font-bold items-center justify-center my-2">Contact Me</h2>
			<div className="flex items-center justify-center my-2.5">
				<a href="https://facebook.com/hamsathul/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 mx-4" aria-label="Facebook">
					<Facebook size={32} />
				</a>
				<a href="https://github.com/hamsathul/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 mx-4" aria-label="Twitter">
					<Github size={32} />
				</a>
				<a href="https://instagram.com/hamsathul_haris/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 mx-4" aria-label="Instagram">
					<Instagram size={32} />
				</a>
				<a href="https://www.linkedin.com/in/hamsathul-haris-kunnamkulathingal-516a08287/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 mx-4" aria-label="LinkedIn">
					<Linkedin size={32} />
				</a>
			</div>
			<div className="mx-auto p-4 bg-transparent border-4 rounded-md border-indigo-600 w-72 md:w-96 max-w-full items-center">
				{state.succeeded ? (
					<p className="text-green-500">Thank you for your message. I will get back to you soon.</p>
				) : (
					<form onSubmit={handleSubmit}>
						<label htmlFor="name" className="font-medium text-white black my-1">
							Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							className="block w-full rounded-md border-0 bg-transparent text-white shadow-sm ring-1 ring-indigo-200 focus:ring-indigo-500 focus:outline-none p-2 my-2"
						/>
						<label htmlFor="email" className="font-medium text-white black my-1">
							E-mail
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="block w-full rounded-md border-0 bg-transparent text-white shadow-sm ring-1 ring-indigo-200 focus:ring-indigo-500 focus:outline-none p-2 my-2"
						/>
						<ValidationError className="mt-1 text-red-500" errors={state.errors} />
						<label htmlFor="message" className="font-medium text-white black my-1">
							Message
						</label>
						<textarea
							name="message"
							id="message"
							className="h-32 block w-full rounded-md border-0 bg-transparent  text-white shadow-sm ring-1 ring-indigo-200 focus:ring-indigo-500 focus:outline-none p-2 my-2"
						/>
						<ValidationError className="mt-1 text-red-500" errors={state.errors} />
						<button
							className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-10"
							disabled={state.submitting}
						>
							Submit
						</button>
					</form>
				)}
			</div>
			</div>
		
		</Section>
	);
}
