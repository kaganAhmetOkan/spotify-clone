"use client";
import style from "./Slider.module.scss";
import { useAtom } from "jotai";
import { currentTrackAtom } from "@/store";
import getMinutes from "@/lib/getMinutes";

export default function Slider() {
  const [currentTrack, setCurrentTrack] = useAtom(currentTrackAtom);
  const { progress, duration } = currentTrack;

  function setProgress(event: React.ChangeEvent<HTMLInputElement>) {
    const value = +event.currentTarget.value;

    setCurrentTrack({ ...currentTrack, progress: value });
  };

  return (
    <div className={style.main}>
      <span>{getMinutes(progress)}</span>
      <input
        type="range"
        min={0}
        max={duration}
        value={progress}
        onChange={setProgress}
      ></input>
      <span>{getMinutes(duration)}</span>
    </div>
  );
};