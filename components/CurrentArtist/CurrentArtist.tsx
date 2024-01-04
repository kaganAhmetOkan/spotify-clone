import style from "./CurrentArtist.module.scss";
import FollowButton from "../FollowButton/FollowButton";

export default function CurrentArtist() {
  const artist = {
    name: "MEMBA",
    listeners: "920,200 monthly listeners",
    description: "Dynamic, world-influenced exploration of rhythm, contrast and the unexpected.",
  };
  
  return (
    <div className={style.main}>
      <h2>About the artist</h2>
      <h1>{artist.name}</h1>
      <div>
        <span>{artist.listeners}</span>
        <FollowButton />
      </div>
      <span>{artist.description}</span>
    </div>
  );
};