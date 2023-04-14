import Image from "next/image";


interface PlayListProps {
  id: string;
}


export function PlayListMainCard({ id }: PlayListProps) {
  return (
    <a href="" className="bg-white/5 hover:bg-white/10 rounded-md flex flex-col gap-2 p-3">
      <Image
        src="/album.jpeg"
        className="w-full"
        width={104}
        height={104}
        alt="Capa Trap Nation"
      />
      <strong className="font-semibold">{id}</strong>
      <span className="text-sm text-zinc-500">Artist Name</span>
    </a>
  );
}
