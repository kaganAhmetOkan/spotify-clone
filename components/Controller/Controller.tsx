import style from "./Controller.module.scss";
import NowPlaying from "../NowPlaying/NowPlaying";
import PrimaryControls from "../PrimaryControls/PrimaryControls";
import SecondaryControls from "../SecondaryControls/SecondaryControls";

export default function Controller() {
  return (
    <div className={style.main}>
      <NowPlaying />
      <PrimaryControls />
      <SecondaryControls />
    </div>
  );
};