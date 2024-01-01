"use client";
import style from "./LibraryFolder.module.scss";
import Image from "next/image";
import { useAtomValue } from "jotai";
import { minimizedAtom, enlargedAtom, thumbnailSizeAtom } from "@/store";

interface Params {
  readonly folder: {
    title: string;
    thumbnail: string;
    type: string;
    creator: string;
    songs: number;
    dateAdded: string;
    lastPlayed: string;
  };
};

export default function LibraryFolder(
  { folder: { title, thumbnail, type, songs, creator, dateAdded, lastPlayed } }: Params
) {
  const thumbnailSize = useAtomValue(thumbnailSizeAtom);
  const minimized = useAtomValue(minimizedAtom);
  const enlarged = useAtomValue(enlargedAtom);
  const subTitle = title === "Liked Songs" ? `${type} • ${songs} songs` : `${type} • ${creator}`;

  return (
    <div className={style.main} data-type={type} data-minimized={minimized} data-enlarged={enlarged}>
      <Image
        src={thumbnail}
        alt={title}
        width={thumbnailSize}
        height={thumbnailSize}
        className={style.thumbnail}
      />
      <div className={style.details}>
        <div className={style.title}>
          <h1>{title}</h1>
          <span>{subTitle}</span>
        </div>
        <span>{dateAdded}</span>
        <span>{lastPlayed}</span>
      </div>
    </div>
  );
};