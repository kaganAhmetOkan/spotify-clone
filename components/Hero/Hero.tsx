"use client";
import style from "./Hero.module.scss";
import getGreeting from "@/lib/getGreeting";
import HeroFolder from "../HeroFolder/HeroFolder";
import { useAtomValue } from "jotai";
import { heroColorAtom } from "@/store";

interface Playlist {
  readonly title: string;
  readonly thumbnail: string;
  readonly color: string;
};

export default function Hero() {
  const greeting = getGreeting();
  const color = useAtomValue(heroColorAtom);

  const folders: Playlist[] = [
    {
      title: "Liked Songs",
      thumbnail: "/images/placeholder.png",
      color: "purple",
    },
    {
      title: "Energetic Mix",
      thumbnail: "/images/placeholder.png",
      color: "red"
    },
    {
      title: "Sunset Serenade",
      thumbnail: "/images/placeholder.png",
      color: "pink"
    },
    {
      title: "Funky Grooves",
      thumbnail: "/images/placeholder.png",
      color: "red"
    },
    {
      title: "Summer Chillout",
      thumbnail: "/images/placeholder.png",
      color: "yellow"
    },
    {
      title: "Retro Vibes",
      thumbnail: "/images/placeholder.png",
      color: "purple"
    },
  ]

  return (
    <div className={style.main} data-color={color}>
      <div className={style.container}>
        <h1>{greeting}</h1>
        <div className={style.folders}>
          {folders.map(folder => <HeroFolder key={folder.title} playlist={folder} />)}
        </div>
      </div>
    </div>
  );
};