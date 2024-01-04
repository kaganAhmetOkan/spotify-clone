import style from "./About.module.scss";
import CurrentTrack from "../CurrentTrack/CurrentTrack";
import CurrentArtist from "../CurrentArtist/CurrentArtist";
import NextTrack from "../NextTrack/NextTrack";

export default function About() {
  return (
    <div className={style.main}>
      <CurrentTrack />
      <CurrentArtist />
      <NextTrack />
    </div>
  );
};