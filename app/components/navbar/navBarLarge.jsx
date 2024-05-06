"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../../globals.css";

export const NavBarLarge = () => {
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
	return (
		<nav>
			<div
				id='navbar'
				className='flex flex-row bg-white bg-opacity-35 dark:bg-black dark:bg-opacity-35 items-center justify-around fixed top-0 z-30 w-full h-[150px]'
			>
				<div>
					<Link
						href='/'
						className='text-black dark:text-white text-lg md:text-2xl lg:text-4xl font-semibold'
					>
						Armando Di Filippo
					</Link>
				</div>
				<div>
					<Link
						href='/AboutMe'
						className='text-black dark:text-white mb-2 md:mb-0 md:ml-6'
					>
						Sobre mí
					</Link>
					<Link
						href='/RenderedBooks'
						className='text-black dark:text-white mb-2 md:mb-0 md:ml-6'
					>
						Libros
					</Link>
					<Link
						href='/Blog'
						className='text-black dark:text-white mb-2 md:mb-0 md:ml-6'
					>
						Blog
					</Link>
					<Link
						onClick={handleContactClick}
						href={router.pathname === "/" ? "#contact" : "/#contact"}
						className='text-black dark:text-white mb-2 md:mb-0 md:ml-6'
					>
						Contacto
					</Link>
				</div>
			</div>
		</nav>
	);
};
