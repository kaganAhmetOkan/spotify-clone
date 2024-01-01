import style from "./Controller.module.scss";
import NowPlaying from "../NowPlaying/NowPlaying";

export default function Controller() {
  return (
    <div className={style.main}>
      <NowPlaying />
    </div>
  );
};