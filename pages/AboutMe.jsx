"use client";
import Image from "next/image";
import { Tabs } from "../app/components/ui/tabs";
import { NavBar } from "../app/components/navbar/NavBar";
import Link from "next/link";
import { IconBooks, IconBrandAmazon } from "@tabler/icons-react";
import { BentoGridSecondDemo } from "../app/components/ui/bento-grid-items";

export default function AboutMe() {
	const tabs = [
		{
			title: "Libro más nuevo",
			value: "book1",
			content: (
				<div className='w-full text-white overflow-hidden relative h-auto rounded-2xl p-[50px] bg-gradient-to-br from-blue-700 to-green-800 shadow-blue-950 shadow-2xl'>
					<p className='text-xl md:text-4xl font-bold text-white'>
						Development and Integration of Latin America: An Odyssey Unfinished
					</p>
					<div className='flex flex-row justify-center items-center my-8 gap-3 md:flex-col space-y-2 md:space-y-0 md:space-x-2'>
						<Image
							src={"/image/book1.jpg"}
							alt='Libro más nuevo'
							width={400}
							height={400}
							className='rounded-2xl'
						/>
						<p className='text-sm md:text-xl font-regular text-white'>
							This book considers Latin American structuralism (L.A.S) as a
							school of thought that was proposed to explain the foundations of
							the development of Latin America starting from its colonial and
							peripheral origins. L.A.S cultivated a Latin Americanism based on
							the idea of liberation against the structures of domination and
							dependence that, since the colonial phase, fragmented the region
							to submit it to the interests of successive hegemonic centers. The
							first part of this book presents a counterpoint between the
							notions of capitalism and development. The second part recounts
							the influence of the founding fathers of L.A.S who, based on the
							formidable impetus of the United Nations (ECLAC), characterized
							the essential features of Latin American structuralism. The third
							part deepens the study of these features and the ideal of Latin
							American unity. The fourth and last part deals with the issue of
							political power under a republican and multidimensional conception
							of democracy. The author especially emphasizes the validity of the
							philosophy of history proposed by L.A.S not only for the study of
							Latin American societies but also for an adequate interpretation
							of the impact of the technical change generated by the current
							cybernetic capitalism that is transforming the world at an
							unprecedented scale and speed.
						</p>
						<div className='flex flex-row justify-center items-center gap-[40px]'>
							<Link href='https://www.amazon.com/Development-Integration-Latin-America-Unfinished/dp/1948915308/ref=sr_1_3?dib=eyJ2IjoiMSJ9.9iB_FvwnwlqwnI0shvYk396-Sj2mnCCxV4mXpl-dl-BSBPLKM_i9pWEhGO7UyK_Seu5gbebcd-FKrnUe1AQ4Cjm9JSfu6l8nX3Ws9itlpXw.w3QilRsO4QkOGBji1cxFpaVDP3v8cdt6FghwQKo1__U&dib_tag=se&qid=1714264029&refinements=p_27%3AArmando+Di+Filippo&s=books&sr=1-3&text=Armando+Di+Filippo'>
								<IconBrandAmazon color='white' size={50} />
								<p>Amazon</p>
							</Link>
							<Link href='https://www.amazon.com/Development-Integration-Latin-America-Unfinished/dp/1948915308/ref=sr_1_3?dib=eyJ2IjoiMSJ9.9iB_FvwnwlqwnI0shvYk396-Sj2mnCCxV4mXpl-dl-BSBPLKM_i9pWEhGO7UyK_Seu5gbebcd-FKrnUe1AQ4Cjm9JSfu6l8nX3Ws9itlpXw.w3QilRsO4QkOGBji1cxFpaVDP3v8cdt6FghwQKo1__U&dib_tag=se&qid=1714264029&refinements=p_27%3AArmando+Di+Filippo&s=books&sr=1-3&text=Armando+Di+Filippo'>
								<IconBooks color='white' size={50} />
								<p>BuscaLibre</p>
							</Link>
						</div>
					</div>
				</div>
			),
		},
		{
			title: "Última clase",
			value: "teach",
			content: (
				<div className='flex flex-col gap-8 items-center justify-center w-full overflow-hidden relative h-auto rounded-2xl p-[50px] text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-green-800 shadow-blue-950 shadow-2xl'>
					<p>Clase sobre el Mercantilismo 🥹</p>
					<iframe
						className='rounded-2xl'
						width='1080'
						height='720'
						src='https://www.youtube.com/embed/gv6vHdg0e8Q?si=7A6uuoD3KGYsDg_H'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerpolicy='strict-origin-when-cross-origin'
						allowfullscreen
					></iframe>
				</div>
			),
		},
		{
			title: "Sobre mí",
			value: "aboutme",
			content: (
				<div className='w-full overflow-hidden relative rounded-2xl p-[50px] text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-green-800 shadow-blue-950 shadow-2xl'>
					<p>Fotos e historia</p>
					<BentoGridSecondDemo />
					<BentoGridSecondDemo />
				</div>
			),
		},
	];

	return (
		<div className='bg-white dark:bg-black'>
			<NavBar />
			<div className='h-[40rem] md:h-[60rem] [perspective:3000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-[200px]'>
				<Tabs tabs={tabs} />
			</div>
		</div>
	);
}