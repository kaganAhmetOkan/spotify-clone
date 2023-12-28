"use client";
import style from "./LibraryFilter.module.scss";
import PropTypes from "prop-types";
import Image from "next/image";
import { useState, useRef } from "react";
import useBind from "@/hooks/useBind";

export default function LibraryFilter({ smallIconSize }) {
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

  function updateType(item) {
    if (type !== item) setType(item)
    else setType("");
  };
  
  return (
    <div className={style.main}>
      <button className={style.mainButton} onClick={toggleDropdown} ref={buttonRef}>
        <span>{sort}</span>
        <Image src={`/icons/${view}.png`} alt="view mode" width={smallIconSize} height={smallIconSize} />
      </button>
      <div className={style.dropdown} data-active={dropdown} style={bindStyle}>
        <ul>
          <li>Sort by</li>
          {sortBy.map(item => 
            <li key={item}>
              <button className={style.button} onClick={() => setSort(item)} data-selected={sort === item}>
                {item}
              </button>
            </li>
          )}
        </ul>
        <ul>
          <li>View as</li>
          {viewAs.map(item => 
            <li key={item}>
              <button className={style.button} onClick={() => setView(item)} data-selected={view === item}>
                <Image src={`/icons/${item}.png`} alt={item} width={smallIconSize} height={smallIconSize} />
                <span>{item}</span>
              </button>
            </li>
          )}
        </ul>
        <ul>
          <li>Type as</li>
          {typeAs.map(item => 
            <li key={item}>
              <button className={style.button} onClick={() => updateType(item)} data-selected={type === item}>
                {item}
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

LibraryFilter.propTypes = {
  smallIconSize: PropTypes.number.isRequired,
};