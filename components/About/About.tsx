"use client";
import style from "./About.module.scss";
import CurrentTrack from "../CurrentTrack/CurrentTrack";
import CurrentArtist from "../CurrentArtist/CurrentArtist";
import NextTrack from "../NextTrack/NextTrack";
import { useAtomValue } from "jotai";
import { aboutAtom } from "@/store";

export default function About() {
  const about = useAtomValue(aboutAtom);
  
  return (
    <div className={style.main} data-visible={about}>
      <div className={style.container}>
        <CurrentTrack />
        <CurrentArtist />
        <NextTrack />
      </div>
    </div>
  );
};