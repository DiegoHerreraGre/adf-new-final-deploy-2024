import "tailwindcss/tailwind.css";
import "/app/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="min-h-screen min-w-screen w-auto h-full bg-white dark:bg-black">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
