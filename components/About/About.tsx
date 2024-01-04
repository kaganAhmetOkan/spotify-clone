import style from "./About.module.scss";
import CurrentTrack from "../CurrentTrack/CurrentTrack";

export default function About() {
  return (
    <div className={style.main}>
      <CurrentTrack />
    </div>
  );
};