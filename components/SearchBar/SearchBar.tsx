"use client";
import style from "./SearchBar.module.scss";
import { usePathname } from "next/navigation";

export default function SearchBar() {
  const path = usePathname();
  const visible = path.includes("/search");

  return (
    <search className={style.main} data-visible={visible}>
      <input
        type="text"
        placeholder="Search track"
      ></input>
    </search>
  );
};