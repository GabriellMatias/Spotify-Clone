interface PlayListProps {
  id: string;
}
export function PlayList({ id }: PlayListProps) {
  return <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">{id}</a>;
}
