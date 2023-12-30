import style from "./Library.module.scss";
import LibraryButton from "../LibraryButton/LibraryButton";
import LibrarySearch from "../LibrarySearch/LibrarySearch";
import LibraryFilter from "../LibraryFilter/LibraryFilter";

interface Params {
  readonly iconSize: number;
  readonly minimized: boolean;
  readonly setMinimized: (value: boolean) => void;
  readonly enlarged: boolean;
  readonly setEnlarged: (value: boolean) => void;
};

export default function Library({ iconSize, minimized, setMinimized, enlarged, setEnlarged }: Params) {
  const smallIconSize = 16;
  
  return (
    <div className={style.main}>
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
          setMinimized={setMinimized}
        />
        <LibraryFilter
          smallIconSize={smallIconSize}
          minimized={minimized}
        />
      </div>
    </div>
  );
};