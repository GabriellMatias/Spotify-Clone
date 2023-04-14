import { Footer } from "@/Components/Footer";
import Head from "next/head";
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PlayList } from "@/Components/PlayList";
import { playListNumbers } from "@/utils/Playlists";
import { PlayListCard } from "@/Components/PlayListCards";
import { PlayListMainCard } from "@/Components/PlayListMainCard";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Spotify Clone</title>
      </Head>
      <section className="bg-zinc-900 text-zinc-50">
        <div className="h-screen flex flex-col">
          <div className="flex flex-1">
            <aside className="w-72 bg-zinc-950 p-6 ">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <nav className="space-y-5 mt-10">
                <a
                  href=""
                  className="flex items-center gap-3 text-sm font-semibold text-zinc-100"
                >
                  <HomeIcon fill="white" />
                  Home
                </a>
                <a
                  href=""
                  className="flex items-center gap-3 text-sm font-semibold text-zinc-100"
                >
                  <Search />
                  Search
                </a>
                <a
                  href=""
                  className="flex items-center gap-3 text-sm font-semibold text-zinc-100"
                >
                  <Library />
                  Your Library
                </a>
              </nav>
              <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-4">
                {playListNumbers.map((playlist) => {
                  return <PlayList key={playlist.id} id={playlist.id} />;
                })}
              </nav>
            </aside>

            <main className="flex-1 p-6 bg-zinc-900">
              <div className="flex items-center gap-4">
                <button className=" rounded-full bg-black/40 p-2">
                  <ChevronLeft />
                </button>
                <button className=" rounded-full bg-black/40 p-2">
                  <ChevronRight />
                </button>
              </div>
              <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {playListNumbers.map((playlist) => {
                  return <PlayListCard key={playlist.id} id={playlist.id} />;
                })}
              </div>

              <h2 className="font-semibold text-2xl mt-10">
                Made For GabriellMatias
              </h2>
              <div className="grid grid-cols-8 gap-4 mt-4">
                {playListNumbers.map((playlist) => {
                  return <PlayListMainCard key={playlist.id} id={playlist.id} />;
                })}
              </div>
            </main>
          </div>
          <Footer />
        </div>
      </section>
    </main>
  );
}
