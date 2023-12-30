import style from "./Library.module.scss";
import LibraryButton from "../LibraryButton/LibraryButton";
import LibrarySearch from "../LibrarySearch/LibrarySearch";
import LibraryFilter from "../LibraryFilter/LibraryFilter";
import LibraryFolder from "../LibraryFolder/LibraryFolder";

interface Params {
  readonly iconSize: number;
  readonly minimized: boolean;
  readonly setMinimized: (value: boolean) => void;
  readonly enlarged: boolean;
  readonly setEnlarged: (value: boolean) => void;
};

export default function Library({ iconSize, minimized, setMinimized, enlarged, setEnlarged }: Params) {
  const smallIconSize = 16;

  const libraryFolders = [
    {
      title: "Liked Songs",
      thumbnail: "/images/placeholder.png",
      type: "playlist",
      creator: "you",
      songs: 722,
      dateAdded: "25 seconds ago",
      lastPlayed: "3 hours ago",
    },
  ];
  
  return (
    <div className={style.main} data-enlarged={enlarged}>
      <LibraryButton
        iconSize={iconSize}
        minimized={minimized}
        setMinimized={setMinimized}
        enlarged={enlarged}
        setEnlarged={setEnlarged}
        smallIconSize={smallIconSize}
      />
      <div className={style.filter}>
        <LibrarySearch
          smallIconSize={smallIconSize}
          minimized={minimized}
        />
        <LibraryFilter
          smallIconSize={smallIconSize}
          minimized={minimized}
        />
      </div>
      <div className={style.tab}>
        <span>Title</span>
        <span>Date Added</span>
        <span>Played</span>
      </div>
      {libraryFolders.map(folder =>
        <LibraryFolder
        key={folder.title}
        folder={folder}
        minimized={minimized}
        enlarged={enlarged}
      />
      )}
    </div>
  );
};