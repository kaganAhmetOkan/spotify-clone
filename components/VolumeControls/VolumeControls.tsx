"use client";
import style from "./VolumeControls.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useAtomValue } from "jotai";
import { mediumIconSizeAtom } from "@/store";

export default function VolumeControls() {
  const [volume, setVolume] = useState(50);
  const [muted, setMuted] = useState(false);
  const mediumIconSize = useAtomValue(mediumIconSizeAtom);

  let volumeSource = "/icons/volume_muted.png";
  
  if (volume > 0 && volume < 33) volumeSource = "/icons/volume_low.png";
  if (volume >= 33 && volume < 67) volumeSource = "/icons/volume_medium.png";
  if (volume >= 67) volumeSource = "/icons/volume_high.png";
  if (muted) volumeSource = "/icons/volume_muted.png";

  function toggleMuted() {
    setMuted(!muted);
  };

  function updateVolume(event: React.ChangeEvent<HTMLInputElement>) {
    if (muted) setMuted(false);
    setVolume(+event.currentTarget.value);
  };

  return (
    <div className={style.main}>
      <button onClick={toggleMuted}>
        <Image
          src={volumeSource}
          alt="volume"
          width={mediumIconSize}
          height={mediumIconSize}
        />
      </button>
      <input
        type="range"
        min={0}
        max={100}
        className={style.slider}
        title={volume.toString()}
        value={muted ? "0" : volume}
        onChange={updateVolume}
      ></input>
    </div>
  );
};