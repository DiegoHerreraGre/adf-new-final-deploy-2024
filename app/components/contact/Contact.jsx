"use client";
import React from "react";
import { Label } from "./label.tsx";
import { Input } from "./input";
import { cn } from "../../../utils/cn";
import emailjs from "@emailjs/browser";

export function SignupFormDemo() {
	const [firstname, setFirstname] = React.useState("");
	const [lastname, setLastname] = React.useState("");
	const [message, setMessage] = React.useState("");

	const handleFirstnameChange = (event) => {
		setFirstname(event.target.value);
	};

	const handleLastnameChange = (event) => {
		setLastname(event.target.value);
	};

	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs.init({
			publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
			blockHeadless: true,
			limitRate: {
				id: "app",
				throttle: 10000,
			},
		});

		emailjs
			.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				{
					from_firstname: firstname,
					from_lastname: lastname,
					message: message,
				}
			)
			.then((result) => {
				console.log(result.text);
			})
			.catch((error) => {
				console.log(error.text);
			});

		emailjs.sendForm(
			process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
			process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
			"#form-for-dhg"
		);
		console.log("Form submitted");
	};
	const formRef = React.useRef(null);
	return (
		<div
			ref={formRef}
			className='max-w-3xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black'
			id='contact'
		>
			<h2 className='font-bold text-5xl text-neutral-800 dark:text-neutral-200'>
				¡Si quieres contactarte conmigo!
			</h2>
			<p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
				Escríbeme aquí y me aseguraré te responderte el mensaje
			</p>

			<form className='my-8' onSubmit={handleSubmit}>
				<div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
					<LabelInputContainer>
						<Label htmlFor='firstname'>Primer nombre</Label>
						<Input
							id='firstname'
							placeholder='Nombre'
							type='text'
							onChange={handleFirstnameChange}
						/>
					</LabelInputContainer>
					<LabelInputContainer>
						<Label htmlFor='lastname'>Apellidos</Label>
						<Input
							id='lastname'
							placeholder='Apellido'
							type='text'
							onChange={handleLastnameChange}
						/>
					</LabelInputContainer>
				</div>
				<LabelInputContainer className='mb-4'>
					<Label htmlFor='email'>Correo</Label>
					<Input id='email' placeholder='Correo' type='email' />
				</LabelInputContainer>
				<LabelInputContainer className='mb-4'>
					<Label htmlFor='message'>Mensaje</Label>
					<Input
						id='message'
						placeholder='Escriba su mensaje'
						type='textarea'
						onChange={handleMessageChange}
					/>
				</LabelInputContainer>

				<button
					className='bg-gradient-to-br relative group/btn from-blue-600 dark:from-zinc-900 dark:to-zinc-900 to-green-700 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
					type='submit'
				>
					Enviar 📩
					<BottomGradient />
				</button>
			</form>
		</div>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
			<span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
		</>
	);
};

const LabelInputContainer = ({ children, className }) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};
