"use client";
import style from "./LikedButton.module.scss";
import Image from "next/image";
import { useAtom, useAtomValue } from "jotai";
import { likedAtom, smallIconSizeAtom } from "@/store";

export default function LikedButton() {
  const [liked, setLiked] = useAtom(likedAtom);
  const smallIconSize = useAtomValue(smallIconSizeAtom);

  const heartSource = liked ? "/icons/heart_green.png" : "/icons/heart.png";

  function toggleLiked() {
    setLiked(!liked);
  };

  return (
    <button className={style.main} onClick={toggleLiked}>
      <Image
        src={heartSource}
        alt="like"
        width={smallIconSize}
        height={smallIconSize}
      />
    </button>
  );
};