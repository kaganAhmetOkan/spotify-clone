"use client";
import style from "./HeroFolder.module.scss";
import Image from "next/image";
import { useAtomValue, useSetAtom } from "jotai";
import { mediumThumbnailSizeAtom, mediumIconSizeAtom, heroColorAtom } from "@/store";

interface Playlist {
  readonly title: string;
  readonly thumbnail: string;
  readonly color: string;
};

export default function HeroFolder({ playlist }: { readonly playlist: Playlist }) {
  const setColor = useSetAtom(heroColorAtom);
  const thumbnailSize = useAtomValue(mediumThumbnailSizeAtom);
  const iconSize = useAtomValue(mediumIconSizeAtom);

  function onMouseEnter() {
    setColor(playlist.color);
  };

  function onMouseLeave() {
    setColor("none");
  };

  return (
    <button className={style.main} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Image
        src={playlist.thumbnail}
        alt={playlist.title}
        width={thumbnailSize}
        height={thumbnailSize}
      />
      <h1>{playlist.title}</h1>
      <div className={style.button}>
        <Image
          src="/icons/play.png"
          alt={`play ${playlist.title}`}
          height={iconSize}
          width={iconSize}
        />
      </div>
    </button>
  );
};