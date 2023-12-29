"use client";
import style from "./LibrarySearch.module.scss";
import Image from "next/image";
import { useState } from "react";

interface Params {
  readonly smallIconSize: number;
  readonly minimized: boolean;
  readonly setMinimized: (value: boolean) => void;
};

export default function LibrarySearch({ smallIconSize, minimized, setMinimized }: Params) {
  const [showSearch, setShowSearch] = useState(false);
  
  function toggleShowSearch() {
    if (showSearch && minimized) {
      setMinimized(false);
    } else {
      setShowSearch(!showSearch);
      setMinimized(false);
    };
  };

  return (
    <search className={style.main} data-show-search={showSearch && !minimized}>
      <button onClick={toggleShowSearch}>
        <Image
          src="/icons/search.png"
          alt="library search"
          width={smallIconSize}
          height={smallIconSize}
        />
      </button>
      <input
        type="text"
        placeholder="Search in your library"
        disabled={!showSearch || minimized}
      ></input>
    </search>
  );
};