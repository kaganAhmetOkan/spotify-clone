import style from "./PrimaryControls.module.scss";
import ToggleShuffle from "../PrimaryControlButtons/ToggleShuffle";
import SkipButton from "../PrimaryControlButtons/SkipButton";
import TogglePlay from "../PrimaryControlButtons/TogglePlay";
import ToggleRepeat from "../PrimaryControlButtons/ToggleRepeat";

export default function PrimaryControls() {
  return (
    <div className={style.main}>
      <div className={style.buttons}>
        <ToggleShuffle />
        <SkipButton type="start" />
        <TogglePlay />
        <SkipButton type="end" />
        <ToggleRepeat />
      </div>
    </div>
  );
};