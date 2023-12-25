import style from "./LibraryButton.module.scss";
import PropTypes from "prop-types";
import Image from "next/image";

export default function LibraryButton({ iconSize, minimized, setMinimized }) {
  const libraryIcon = minimized ? "/icons/library.png" : "/icons/library_filled.png";
  const buttonTitle = minimized ? "Expand Your Library" : "Collapse Your Library";
  const smallIconSize = 16;

  function toggleMinimized() {
    setMinimized(!minimized);
  };

  return (
    <div className={style.main}>
      <button className={style.title} title={buttonTitle} onClick={toggleMinimized}>
          <Image src={libraryIcon} alt="library" width={iconSize} height={iconSize} />
          <span>Library</span>
      </button>
      <button className={style.button} title="Create playlist or folder">
        <Image src={`/icons/plus.png`} alt="new playlist" width={smallIconSize} height={smallIconSize} />
      </button>
    </div>
  );
};

LibraryButton.propTypes = {
  iconSize: PropTypes.number.isRequired,
  minimized: PropTypes.bool.isRequired,
  setMinimized: PropTypes.func.isRequired,
};