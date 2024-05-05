"use client";
import { HeroHighlightDemo } from "./components/home/Home";
import { InfiniteMovingCardsDemo } from "./components/cards/cards";
import { SignupFormDemo } from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { NavBar } from "./components/navbar/NavBar";

export default function Home() {
	return (
		<>
			<head>
				<link
					rel='preload'
					href='../fonts/MonaSans-Regular.woff2'
					as='font'
					type='woff2'
					crossOrigin='anonymous'
				/>
				<title>Armando Di Filippo</title>
			</head>
			<body>
				<NavBar />
				<main className='flex flex-col dark:bg-black'>
					<HeroHighlightDemo />
				</main>
				<section>
					<InfiniteMovingCardsDemo />
				</section>
				<section className='bg-white dark:bg-black mb-14 my-32'>
					<SignupFormDemo />
				</section>
				<footer>
					<Footer />
				</footer>
			</body>
		</>
	);
}
