"use client";
import style from "./PrimaryControlButton.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useAtomValue } from "jotai";
import { mediumIconSizeAtom } from "@/store";

export default function TogglePlay() {
  const iconSize = useAtomValue(mediumIconSizeAtom);
  const [playing, setPlaying] = useState(false);
  const iconSource = playing ? "/icons/pause.png" : "/icons/play.png";

  function togglePlaying() {
    setPlaying(!playing);
  };

  return (
    <button className={style.main} onClick={togglePlaying} data-type="play">
      <Image
        src={iconSource}
        alt="play"
        width={iconSize}
        height={iconSize}
      />
    </button>
  );
};