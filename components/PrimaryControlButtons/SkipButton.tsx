"use client";
import style from "./PrimaryControlButton.module.scss";
import Image from "next/image";
import { useAtomValue } from "jotai";
import { mediumIconSizeAtom } from "@/store";

export default function SkipButton(
  { type }: { readonly type: "end" | "start" }
) {
  const iconSize = useAtomValue(mediumIconSizeAtom);
  const iconSource = `/icons/skip_to_${type}.png`;

  return (
    <button className={style.main} data-type={type}>
      <Image
        src={iconSource}
        alt={type}
        width={iconSize}
        height={iconSize}
      />
    </button>
  );
};