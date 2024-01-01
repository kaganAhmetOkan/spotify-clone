"use client";
import style from "./NowPlaying.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useAtomValue } from "jotai";
import { thumbnailSizeAtom, smallIconSizeAtom } from "@/store";

export default function NowPlaying() {
  const [liked, setLiked] = useState(false);
  const thumbnailSize = useAtomValue(thumbnailSizeAtom);
  const smallIconSize = useAtomValue(smallIconSizeAtom);

  const dummySong = {
    title: "Stand Off",
    creators: ["MEMBA", "Ehiorobo"],
    thumbnail: "/images/placeholder.png",
  };

  const creator = dummySong.creators.join(", ");
  const heartSource = liked ? "/icons/heart_green.png" : "/icons/heart.png";

  function toggleLiked() {
    setLiked(!liked)
  };
  
  return (
    <div className={style.main}>
      <Image
        src={dummySong.thumbnail}
        alt={dummySong.title}
        width={thumbnailSize}
        height={thumbnailSize}
        className={style.thumbnail}
      />
      <div className={style.details}>
        <h1>{dummySong.title}</h1>
        <span>{creator}</span>
      </div>
      <button className={style.button} onClick={toggleLiked}>
        <Image
          src={heartSource}
          alt="like"
          width={smallIconSize}
          height={smallIconSize}
          className={style.icon}
        />
      </button>
    </div>
  );
};