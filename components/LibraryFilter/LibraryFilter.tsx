"use client";
import style from "./LibraryFilter.module.scss";
import Image from "next/image";
import SortList from "../LibraryFilterLists/SortList";
import ViewList from "../LibraryFilterLists/ViewList";
import TypeList from "../LibraryFilterLists/TypeList";
import { useState, useRef } from "react";
import useBind from "@/hooks/useBind";

interface Params {
  readonly smallIconSize: number;
  readonly minimized: boolean;
};

export default function LibraryFilter({ smallIconSize, minimized }: Params) {
  const [dropdown, setDropdown] = useState(false);
  const [sort, setSort] = useState("recents");
  const [view, setView] = useState("list");
  const [type, setType] = useState("");

  const sortBy = ["recents", "recently added", "alphabetical", "creator"];
  const viewAs = ["compact", "list", "grid"];
  const typeAs = ["playlist", "podcast & shows", "albums", "artists"];

  const buttonRef = useRef(null);
  const bindStyle = useBind(buttonRef);

  function toggleDropdown() {
    setDropdown(!dropdown);
  };

  return (
    <div className={style.main} data-minimized={minimized}>
      <button className={style.mainButton} onClick={toggleDropdown} ref={buttonRef}>
        <span>{sort}</span>
        <Image src={`/icons/${view}.png`} alt="view mode" width={smallIconSize} height={smallIconSize} />
      </button>
      <div className={style.dropdown} data-active={dropdown} style={bindStyle}>
        <SortList
          list={sortBy}
          sort={sort}
          setSort={setSort}
        />
        <ViewList
          list={viewAs}
          view={view}
          setView={setView}
          smallIconSize={smallIconSize}
        />
        <TypeList
          list={typeAs}
          type={type}
          setType={setType}
        />
      </div>
    </div>
  );
};