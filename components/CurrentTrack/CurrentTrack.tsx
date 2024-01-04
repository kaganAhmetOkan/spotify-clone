"use client";
import style from "./CurrentTrack.module.scss";
import Image from "next/image";
import LikedButton from "../LikedButton/LikedButton";
import { useAtomValue } from "jotai";
import { currentTrackAtom } from "@/store";

export default function CurrentTrack() {
  const dummySong = useAtomValue(currentTrackAtom);
  const playlistTitle = dummySong.playlist ?? dummySong.title;
  const trackTitle = dummySong.title;
  const creators = dummySong.creators.join(", ");
  const thumbnailSize = 256;

  return (
    <div className={style.main}>
      <h1>{playlistTitle}</h1>
      <Image
        src={dummySong.thumbnail}
        alt={dummySong.title}
        width={thumbnailSize}
        height={thumbnailSize}
      />
      <div className={style.details}>
        <div>
          <h2>{trackTitle}</h2>
          <span>{creators}</span>
        </div>
        <LikedButton/>
      </div>
    </div>
  );
};