import {
  Laptop2,
  LayoutList,
  Maximize,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 py-6 px-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {" "}
        <Image
          src="/album.jpeg"
          width={56}
          height={56}
          alt="Capa Trap Nation"
        />
        <div className="flex flex-col ">
          <strong className="font-normal">Marshl fall</strong>
          <span className="text-xs text-zinc-400">Trap Nation </span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <section className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />
          <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-white text-black ml-auto ">
            <Play size={20} className="text-zinc-200" />
          </button>
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </section>
        <section className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:32</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-400">0:72</span>
        </section>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
