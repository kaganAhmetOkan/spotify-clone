import style from "./Controller.module.scss";
import NowPlaying from "../NowPlaying/NowPlaying";
import SecondaryControls from "../SecondaryControls/SecondaryControls";

export default function Controller() {
  return (
    <div className={style.main}>
      <NowPlaying />
      <SecondaryControls />
    </div>
  );
};