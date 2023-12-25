"use client";
import style from "./Library.module.scss";
import PropTypes from "prop-types";
import { useState } from "react";
import LibraryButton from "../LibraryButton/LibraryButton";

export default function Library({ iconSize }) {
  const [minimized, setMinimized] = useState(false);
  const [enlarged, setEnlarged] = useState(false);

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
};