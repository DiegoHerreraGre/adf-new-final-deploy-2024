import "tailwindcss/tailwind.css";
import "/app/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<SpeedInsights />
			<div className='min-h-screen min-w-screen w-auto h-full bg-white dark:bg-black'>
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
