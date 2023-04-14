import { Play } from "lucide-react";
import Image from "next/image";

interface PlayListProps {
  id: string;
}
export function PlayListCard({ id }: PlayListProps) {
  return (
    <a className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
      <Image
        src="/album.jpeg"
        width={104}
        height={104}
        alt="Capa Trap Nation"
      />
      <strong>{id}</strong>
      <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
        <Play fill="black" />
      </button>
    </a>
  );
}
