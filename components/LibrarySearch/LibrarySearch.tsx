"use client";
import style from "./LibrarySearch.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useAtomValue } from "jotai";
import { smallIconSizeAtom, minimizedAtom } from "@/store";

export default function LibrarySearch() {
  const [showSearch, setShowSearch] = useState(false);
  const minimized = useAtomValue(minimizedAtom);
  const smallIconSize = useAtomValue(smallIconSizeAtom);

  function toggleShowSearch() {
    setShowSearch(!showSearch);
  };

  return (
    <search className={style.main} data-show-search={showSearch} data-minimized={minimized}>
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
        disabled={!showSearch}
      ></input>
    </search>
  );
};