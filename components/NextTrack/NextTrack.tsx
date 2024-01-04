"use client";
import style from "./NextTrack.module.scss";
import Image from "next/image";
import { useAtomValue } from "jotai";
import { thumbnailSizeAtom } from "@/store";

export default function NextTrack() {
  const thumbnailSize = useAtomValue(thumbnailSizeAtom);
  
  const nextSong = {
    title: "Sneaky Driver",
    creators: ["Bill Kiley"],
    thumbnail: "/images/placeholder.png",
  };

  const creator = nextSong.creators.join(", ");
  
  return (
    <div className={style.main}>
      <h2>Next in queue</h2>
      <div className={style.details}>
        <Image
          src={nextSong.thumbnail}
          alt={nextSong.title}
          width={thumbnailSize}
          height={thumbnailSize}
        />
        <div>
          <h1>{nextSong.title}</h1>
          <span>{creator}</span>
        </div>
      </div>
    </div>
  );
};