import style from "./Library.module.scss";
import PropTypes from "prop-types";
import LibraryButton from "../LibraryButton/LibraryButton";

export default function Library({ iconSize, minimized, setMinimized, enlarged, setEnlarged }) {
  return (
    <div className={style.main}>
      <LibraryButton
        iconSize={iconSize}
        minimized={minimized}
        setMinimized={setMinimized}
        enlarged={enlarged}
        setEnlarged={setEnlarged}
      />
    </div>
  );
};

Library.propTypes = {
  iconSize: PropTypes.number.isRequired,
  minimized: PropTypes.bool.isRequired,
  setMinimized: PropTypes.func.isRequired,
  enlarged: PropTypes.bool.isRequired,
  setEnlarged: PropTypes.func.isRequired,
};