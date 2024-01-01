"use client";
import style from "./SecondaryControls.module.scss";
import Image from "next/image";
import VolumeControls from "../VolumeControls/VolumeControls";
import { useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { aboutAtom, mediumIconSizeAtom } from "@/store";

export default function SecondaryControls() {
  const [about, setAbout] = useAtom(aboutAtom);
  const [lyrics, setLyrics] = useState(false);
  const [queue, setQueue] = useState(false);
  const [devices, setDevices] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const mediumIconSize = useAtomValue(mediumIconSizeAtom);

  const aboutSource = about ? "/icons/about_green.png" : "/icons/about.png";
  const lyricsSource = lyrics ? "/icons/lyrics_green.png" : "/icons/lyrics.png";
  const queueSource = queue ? "/icons/queue_green.png" : "/icons/queue.png";
  const devicesSource = devices ? "/icons/devices_green.png" : "/icons/devices.png";
  const fullscreenSource = fullscreen ? "/icons/compress.png" : "/icons/enlarge.png";

  function toggleAbout() {
    setAbout(!about);
  };

  function toggleLyrics() {
    setLyrics(!lyrics);
  };

  function toggleQueue() {
    setQueue(!queue);
  };

  function toggleDevices() {
    setDevices(!devices);
  };

  async function toggleFullscreen() {
    if (fullscreen) document.exitFullscreen()
    else await document.body.requestFullscreen()

    setFullscreen(!fullscreen);
  };

  return (
    <div className={style.main}>
      <button onClick={toggleAbout}>
        <Image
          src={aboutSource}
          alt="show about"
          width={mediumIconSize}
          height={mediumIconSize}
        />
      </button>
      <button onClick={toggleLyrics}>
        <Image
          src={lyricsSource}
          alt="show lyrics"
          width={mediumIconSize}
          height={mediumIconSize}
        />
      </button>
      <button onClick={toggleQueue}>
        <Image
          src={queueSource}
          alt="show queue"
          width={mediumIconSize}
          height={mediumIconSize}
        />
      </button>
      <button onClick={toggleDevices}>
        <Image
          src={devicesSource}
          alt="show devices"
          width={mediumIconSize}
          height={mediumIconSize}
        />
      </button>
      <VolumeControls />
      <button onClick={toggleFullscreen}>
        <Image
          src={fullscreenSource}
          alt="fullscreen"
          width={mediumIconSize}
          height={mediumIconSize}
        />
      </button>
    </div>
  );
};

// TODO: Connect setAbout to About component