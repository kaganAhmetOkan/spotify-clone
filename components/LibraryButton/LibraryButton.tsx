import style from "./LibraryButton.module.scss";
import Image from "next/image";

interface Params {
  readonly iconSize: number;
  readonly smallIconSize: number;
  readonly minimized: boolean;
  readonly setMinimized: (value: boolean) => void;
  readonly enlarged: boolean;
  readonly setEnlarged: (value: boolean) => void;
};

export default function LibraryButton(
  { iconSize, smallIconSize, minimized, setMinimized, enlarged, setEnlarged }: Params
) {
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
        <Image
          src={libraryIcon}
          alt="library"
          width={iconSize}
          height={iconSize}
        />
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