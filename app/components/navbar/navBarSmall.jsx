"use client";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "../../globals.css";

const BurgerButton = ({ isOpen, handleClick }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<button
			className={`fixed top-4 right-4 z-40 flex flex-col items-center justify-center w-12 h-12 rounded-full ${
				isDarkMode ? "bg-white text-black bg-opacity-35" : "bg-black text-white"
			}`}
			onClick={handleClick}
		>
			<div
				className={`w-6 h-6 z-10 flex flex-col justify-between ${
					isOpen ? "opacity-100" : "opacity-50"
				}`}
				onClick={toggleDarkMode}
			>
				<span className={`h-1 bg-current rounded-full`}></span>
				<span className={`h-1 bg-current rounded-full`}></span>
				<span className={`h-1 bg-current rounded-full`}></span>
			</div>
		</button>
	);
};

export const NavBarSmall = () => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	router.pathname = undefined;

	const handleContactClick = async (e) => {
		e.preventDefault();
		await router.push("/#contact", { scroll: false });
		window.scrollTo({
			top: document.querySelector("#contact")?.offsetTop - 300,
			behavior: "smooth",
		});
	};

	const handleMenuClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='flex flex-row items-center max-w-full text-4xl' id='menu'>
			<BurgerButton isOpen={isOpen} handleClick={handleMenuClick} />
			<div className='flex flex-col items-center justify-center'>
				<Menu
					isOpen={isOpen}
					width={"100%"}
					id='navbar'
					styles={{
						bmMenu: {
							position: "fixed",
							zIndex: 30,
							height: "100vh",
							overflowY: "auto",
						},
					}}
				>
					<h4>
						<Link href='/'>Armando Di Filippo</Link>
					</h4>
					<Link href='/AboutMe' className='menu-item'>
						Sobre mí
					</Link>
					<Link href='/RenderedBooks' className='menu-item'>
						Libros
					</Link>
					<Link href='/Blog' className='menu-item'>
						Blog
					</Link>
					<Link
						onClick={handleContactClick}
						href={router.pathname === "/" ? "#contact" : "/#contact"}
						className='menu-item'
					>
						Contacto
					</Link>
					<BurgerButton handleClick={handleMenuClick} />
				</Menu>
			</div>
		</div>
	);
};
