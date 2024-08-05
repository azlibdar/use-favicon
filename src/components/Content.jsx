import { useFavicon } from "react-customs";

function Content() {
  const setFavicon = useFavicon();

  const handleFavicon = () => {
    setFavicon("https://en.wikipedia.org/static/favicon/wikipedia.ico");
  };

  return (
    <main className="w-full p-4 md:p-6 flex justify-center">
      <div className="w-full max-w-[800px] bg-zinc-950 text-zinc-50 rounded-lg p-6">
        <div className="my-6 flex flex-col items-center justify-center">
          <h1 className="w-full text-center text-2xl font-bold text-zinc-100">Change Favicon</h1>
          <p className="mt-1 text-zinc-400 text-center leading-snug">Click below to change the favicon to Wikipedia.</p>
          <button
            onClick={handleFavicon}
            className="mt-8 py-2.5 px-5 rounded-lg bg-indigo-400 font-semibold text-sm text-black transition hover:opacity-90 active:translate-y-[1px]"
          >
            Change favicon
          </button>
        </div>
      </div>
    </main>
  );
}

export default Content;
