"use client";
import style from "./Sidebar.module.scss";
import Nav from "../Nav/Nav";
import Library from "../Library/Library";
import { useState } from "react";

export default function Sidebar() {
  const [minimized, setMinimized] = useState(false);
  const [enlarged, setEnlarged] = useState(false);

  const iconSize = 24;

  return (
    <div className={style.main} data-enlarged={enlarged} data-minimized={minimized}>
      <Nav iconSize={iconSize} minimized={minimized} />
      <Library
        iconSize={iconSize}
        minimized={minimized}
        setMinimized={setMinimized}
        enlarged={enlarged}
        setEnlarged={setEnlarged}
      />
    </div>
  );
};