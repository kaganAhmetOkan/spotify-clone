"use client";
import style from "./Slider.module.scss";
import CustomSlider from "rc-slider";
import "rc-slider/assets/index.css";
import { useAtom } from "jotai";
import { currentTrackAtom } from "@/store";
import getMinutes from "@/lib/getMinutes";

export default function Slider() {
  const [currentTrack, setCurrentTrack] = useAtom(currentTrackAtom);
  const { progress, duration } = currentTrack;

  function setProgress(value: number | number[]) {
    if (typeof value !== "number") return;
    setCurrentTrack({ ...currentTrack, progress: value });
  };

  return (
    <div className={style.main}>
      <span>{getMinutes(progress)}</span>
      <CustomSlider
        className={style.input}
        classNames={{ track: style.track, handle: style.handle, rail: style.rail }}
        min={0}
        max={duration}
        value={progress}
        onChange={setProgress}
      />
      <span>{getMinutes(duration)}</span>
    </div>
  );
};