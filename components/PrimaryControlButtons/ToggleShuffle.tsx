"use client";
import style from "./PrimaryControlButton.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useAtomValue } from "jotai";
import { mediumIconSizeAtom } from "@/store";

export default function ToggleShuffle() {
  const iconSize = useAtomValue(mediumIconSizeAtom);
  const [shuffle, setShuffle] = useState(false);
  const iconSource = shuffle ? "/icons/shuffle_green.png" : "/icons/shuffle.png";
  
  function toggleShuffle() {
    setShuffle(!shuffle);
  };

  return (
    <button className={style.main} onClick={toggleShuffle} data-type={"shuffle"}>
      <Image
        src={iconSource}
        alt="shuffle"
        width={iconSize}
        height={iconSize}
      />
    </button>
  );
};