import style from "./CurrentArtist.module.scss";
import Image from "next/image";
import FollowButton from "../FollowButton/FollowButton";

export default function CurrentArtist() {
  const artist = {
    name: "MEMBA",
    listeners: "920,200 monthly listeners",
    description: "Dynamic, world-influenced exploration of rhythm, contrast and the unexpected.",
  };
  
  return (
    <div className={style.main}>
      <div className={style.thumbnail}>
        <h2>About the artist</h2>
        <Image
          src={"/images/artist.jpg"}
          alt="artist"
          fill
        />
      </div>
      <h1>{artist.name}</h1>
      <div className={style.details}>
        <span>{artist.listeners}</span>
        <FollowButton />
      </div>
      <span>{artist.description}</span>
    </div>
  );
};

// TODO: Artist image is placeholder