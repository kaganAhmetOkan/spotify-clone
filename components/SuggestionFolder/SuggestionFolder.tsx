import style from "./SuggestionFolder.module.scss";
import Image from "next/image";
import limitCharacters from "@/lib/limitCharacters";

interface Playlist {
  title: string;
  description: string;
  thumbnail: string;
  color: string;
};

export default function SuggestionFolder({ playlist }: { readonly playlist: Playlist }) {
  const thumbnailSize = 128;

  return (
    <div className={style.main}>
      <div className={style.thumbnail}>
        <Image
          src={playlist.thumbnail}
          alt={playlist.title}
          fill
        />
      </div>
      <h1>{playlist.title}</h1>
      <span>{limitCharacters(playlist.description, 100)}</span>
    </div>
  );
};