import style from "./About.module.scss";
import CurrentTrack from "../CurrentTrack/CurrentTrack";
import CurrentArtist from "../CurrentArtist/CurrentArtist";

export default function About() {
  return (
    <div className={style.main}>
      <CurrentTrack />
      <CurrentArtist />
    </div>
  );
};