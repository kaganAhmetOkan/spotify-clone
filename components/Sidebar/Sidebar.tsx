"use client";
import style from "./Sidebar.module.scss";
import Nav from "../Nav/Nav";
import Library from "../Library/Library";
import { useAtomValue } from "jotai";
import { minimizedAtom, enlargedAtom } from "@/store";

export default function Sidebar() {
  const minimized = useAtomValue(minimizedAtom);
  const enlarged = useAtomValue(enlargedAtom);
  
  return (
    <div
      className={style.main}
      data-enlarged={enlarged}
      data-minimized={minimized}
    >
      <Nav/>
      <Library/>
    </div>
  );
};