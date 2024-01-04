"use client";
import style from "./PrimaryControlButton.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useAtomValue } from "jotai";
import { mediumIconSizeAtom } from "@/store";

export default function ToggleRepeat() {
  const iconSize = useAtomValue(mediumIconSizeAtom);
  const [repeat, setRepeat] = useState("off");
  let iconSource: string;

  if (repeat === "off") iconSource = "/icons/repeat.png";
  else if (repeat === "on") iconSource = "/icons/repeat_green.png";
  else iconSource = "/icons/repeat_one_green.png";

  function toggleRepeat() {
    // circle between "off" "on" "one"
    if (repeat === "off") setRepeat("on");
    else if (repeat === "on") setRepeat("one");
    else setRepeat("off");
  };

  return (
    <button className={style.main} onClick={toggleRepeat} data-type="repeat">
      <Image
        src={iconSource}
        alt="repeat"
        width={iconSize}
        height={iconSize}
      />
    </button>
  );
};