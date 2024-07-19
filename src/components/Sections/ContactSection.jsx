import React from 'react';
import { Section } from '../Interface.jsx';
import { useForm, ValidationError } from '@formspree/react';

export const ContactSection = () => {

	const [state, handleSubmit] = useForm("xwpeekwz");

	return (
		<Section>
			<h2 className="text-3xl md:text-5xl text-white font-bold mb-32 md:mb-0">Contact Me</h2>
			<div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
					{state.succeeded ? (<p className="text-green-500">Thank you for your message. I will get back to you soon.</p>)
					: (

				<form onSubmit={handleSubmit}>
					<label for="name" className="font-medium text-gray-100 black my-1">
						Name
					</label>
					<input 
					type="text"
					name="name"
					id="name" 
					className="block w-full rounded-md border-0 text-gray-100 shadow-sm ring-1 ring-gray-200 focus:ring-indigo-500 focus:outline-none p-2" 
					/>
					<label for="email" className="font-medium text-gray-100 black my-1">
						E-mail
					</label>
					<input 
					type="email"
					name="email"
					id="email" 
					className="block w-full rounded-md border-0 text-gray-100 shadow-sm ring-1 ring-gray-200 focus:ring-indigo-500 focus:outline-none p-2" 
					/>
					<ValidationError className="mt-1 text-red-500" errors={state.errors}
      />
					<label for="name" className="font-medium text-gray-100 black my-1">
						Message
					</label>
					<textarea
					name="message"
					id="name" 
					className="h-32 block w-full rounded-md border-0 text-gray-100 shadow-sm ring-1 ring-gray-200 focus:ring-indigo-500 focus:outline-none p-2" 
					/>
					 <ValidationError className="mt-1 text-red-500" errors={state.errors}
      />
					<button className={`
						bg-indigo-600 text-white py-4 px-8
						rounded-lg font-bold text-lg mt-16
						`}
						disabled={state.submitting}
						>
						Submit
					</button>
				</form>
					)}
			</div>
		</Section>
	)
}