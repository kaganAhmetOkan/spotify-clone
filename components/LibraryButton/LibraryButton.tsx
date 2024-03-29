"use client";
import style from "./LibraryButton.module.scss";
import Image from "next/image";
import { useAtomValue, useAtom } from "jotai";
import { iconSizeAtom, smallIconSizeAtom, minimizedAtom, enlargedAtom } from "@/store";

export default function LibraryButton() {
  const [minimized, setMinimized] = useAtom(minimizedAtom);
  const [enlarged, setEnlarged] = useAtom(enlargedAtom);
  const iconSize = useAtomValue(iconSizeAtom);
  const smallIconSize = useAtomValue(smallIconSizeAtom);

  const libraryIcon = minimized ? "/icons/library.png" : "/icons/library_filled.png";
  const buttonTitle = minimized ? "Expand Your Library" : "Collapse Your Library";
  const enlargeIcon = enlarged ? "/icons/arrow_left.png" : "/icons/arrow_right.png";
  const enlargeTitle = enlarged ? "Show less" : "Show more";

  function toggleMinimized() {
    setMinimized(!minimized);
  };

  function toggleEnlarged() {
    setEnlarged(!enlarged);
  };

  return (
    <div className={style.main} data-minimized={minimized}>
      <button className={style.title} title={buttonTitle} onClick={toggleMinimized}>
        <div className={style.icon}>
          <Image
            src={libraryIcon}
            alt="library"
            width={iconSize}
            height={iconSize}
          />
        </div>
        <span>Library</span>
      </button>
      <button className={style.button} title="Create playlist or folder">
        <Image
          src={`/icons/plus.png`}
          alt="new playlist"
          width={smallIconSize}
          height={smallIconSize}
        />
      </button>
      <button className={style.button} title={enlargeTitle} onClick={toggleEnlarged}>
        <Image
          src={enlargeIcon}
          alt="enlarge"
          width={smallIconSize}
          height={smallIconSize}
        />
      </button>
    </div>
  );
};