import style from "./LibraryFolder.module.scss";
import Image from "next/image";

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
  readonly minimized: boolean;
  readonly enlarged: boolean;
};

export default function LibraryFolder(
  { folder: { title, thumbnail, type, songs, creator, dateAdded, lastPlayed }, minimized, enlarged }: Params
) {
  const thumbnailSize = 48;
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