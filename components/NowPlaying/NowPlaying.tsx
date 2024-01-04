"use client";
import style from "./NowPlaying.module.scss";
import Image from "next/image";
import LikedButton from "../LikedButton/LikedButton";
import { useAtomValue } from "jotai";
import { thumbnailSizeAtom, currentTrackAtom } from "@/store";

export default function NowPlaying() {
  const thumbnailSize = useAtomValue(thumbnailSizeAtom);
  const dummySong = useAtomValue(currentTrackAtom);

  const creator = dummySong.creators.join(", ");
  
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
      <LikedButton/>
    </div>
  );
};