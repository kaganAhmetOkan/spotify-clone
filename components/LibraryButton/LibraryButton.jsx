import style from "./LibraryButton.module.scss";
import PropTypes from "prop-types";
import Image from "next/image";

export default function LibraryButton({ iconSize, minimized, setMinimized }) {
  const libraryIcon = minimized ? "/icons/library.png" : "/icons/library_filled.png";
  const buttonTitle = minimized ? "Expand Your Library" : "Collapse Your Library";

  function toggleMinimized() {
    setMinimized(!minimized);
  };

  return (
    <button className={style.main} title={buttonTitle} onClick={toggleMinimized}>
        <Image src={libraryIcon} alt="library" width={iconSize} height={iconSize} />
        <span>Library</span>
    </button>
  );
};

LibraryButton.propTypes = {
  iconSize: PropTypes.number.isRequired,
  minimized: PropTypes.bool.isRequired,
  setMinimized: PropTypes.func.isRequired,
};