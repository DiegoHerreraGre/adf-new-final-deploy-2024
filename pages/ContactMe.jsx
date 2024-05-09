"use client";
import React from "react";
import { Label2 } from "../app/components/contactme/label2";
import { Input2 } from "../app/components/contactme/input2";
import { cn } from "../utils/cn";
import { BackgroundGradient } from "../app/components/ui/background-gradient";
import { NavBar } from "../app/components/navbar/NavBar";
import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { config } from "../config";

export default function ContactMe() {
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
	const [hovered, setHovered] = React.useState(false);
	const handleSubmit2 = (e) => {
		e.preventDefault();
		emailjs.init({
			publicKey: config.emailjsPublicKey,
			blockHeadless: true,
			limitRate: {
				id: "app",
				throttle: 10000,
			},
		});

		emailjs
			.send(config.emailjsServiceId, config.emailjsTemplateId, {
				from_firstname: firstname,
				from_lastname: lastname,
				message: message,
			})
			.then((result) => {
				console.log(result.text);
			})
			.catch((error) => {
				console.log(error.text);
			});

		emailjs.sendForm(
			config.emailjsServiceId,
			config.emailjsTemplateId,
			"#form-for-dhg"
		);
		console.log("Form submitted");
	};
	return (
		<>
			<NavBar />
			<BackgroundGradient animate={true}>
				<main className='flex flex-col rounded-3xl bg-white dark:bg-black my-[200px]'>
					<div className='max-w-auto w-auto mx-auto rounded-3xl md:rounded-3xl p-4 md:p-8 shadow-input bg-white dark:bg-black'>
						<h2 className='font-extrabold text-7xl text-neutral-800 dark:text-neutral-200 my-5'>
							🤩
							<TextAnimatedGradient />
							😍
						</h2>
						<p className='text-neutral-900 text-center text-md max-w-auto my-8 mt-10 dark:text-neutral-400'>
							Envíame un mensaje o sígueme en las siguientes redes para que
							pueda trabajar en tu futuro proyecto
						</p>
						<form className='my-8' onSubmit={handleSubmit2} id='form-for-dhg'>
							<div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 mb-4'>
								<LabelInputContainerTwo>
									<Label2 htmlFor='firstname'>Primer nombre</Label2>
									<Input2
										id='firstname'
										placeholder='Nombre'
										type='text'
										onChange={handleFirstnameChange}
									/>
								</LabelInputContainerTwo>
								<LabelInputContainerTwo>
									<Label2 htmlFor='lastname'>Apellidos</Label2>
									<Input2
										id='lastname'
										placeholder='Apellido'
										type='text'
										onChange={handleLastnameChange}
									/>
								</LabelInputContainerTwo>
							</div>
							<LabelInputContainerTwo className='mb-4'>
								<Label2 htmlFor='email'>Correo</Label2>
								<Input2 id='email' placeholder='Correo' type='email' />
							</LabelInputContainerTwo>
							<LabelInputContainerTwo className='mb-4'>
								<Label2 htmlFor='message'>Mensaje</Label2>
								<Input2
									id='message'
									placeholder='Escribe tu mensaje'
									type='text'
									onChange={handleMessageChange}
								/>
							</LabelInputContainerTwo>

							<button
								className='bg-gradient-to-br relative group/btn from-blue-600 dark:from-zinc-900 dark:to-zinc-900 to-green-700 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
								type='submit'
							>
								Contáctame 💻
								<BottomGradientTwo />
							</button>
							<Link
								href='https://github.com/DiegoHerreraGre'
								className='flex flex-col justify-center items-center'
								c
							>
								<IconBrandGithub
									stroke={"2"}
									width={60}
									height={60}
									className='m-[20px] text-6xl text-neutral-800 dark:text-neutral-200 cursor-pointer hover:text-blue-600 dark:hover:text-zinc-900 transition duration-300'
								/>
								<div
									onMouseOver={() => setHovered(true)}
									onMouseOut={() => setHovered(false)}
									className='flex flex-col justify-center items-center'
								>
									<span className={hovered ? "jiggle" : undefined}>⬆️⬆️⬆️</span>

									<p className='text-xl text-neutral-800 dark:text-neutral-200 cursor-pointer hover:text-blue-600 dark:hover:text-white transition duration-300'>
										Revisa mi Github
									</p>
								</div>
							</Link>
						</form>
					</div>
				</main>
			</BackgroundGradient>
		</>
	);
}

const BottomGradientTwo = () => {
	return (
		<>
			<span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
			<span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
		</>
	);
};

const LabelInputContainerTwo = ({ children, className }) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};

const TextAnimatedGradient = () => {
	return (
		<span className='inline-flex p-5 text-6xl text-center animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent'>
			¿Te gustó la página?
		</span>
	);
};
