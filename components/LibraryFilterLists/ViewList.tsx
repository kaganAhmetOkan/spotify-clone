"use client";
import style from "./List.module.scss";
import Image from "next/image";
import { useAtomValue } from "jotai";
import { smallIconSizeAtom } from "@/store";

interface Params {
  readonly list: string[];
  readonly view: string;
  readonly setView: (value: string) => void;
};

export default function ViewList({ list, view, setView }: Params) {
  const smallIconSize = useAtomValue(smallIconSizeAtom);
  
  return (
    <ul className={style.main}>
      <li>View as</li>
      {list.map(item =>
        <li key={item}>
          <button className={style.button} onClick={() => setView(item)} data-selected={view === item}>
            <Image
              src={`/icons/${item}.png`}
              alt={item}
              width={smallIconSize}
              height={smallIconSize}
            />
            <span>{item}</span>
          </button>
        </li>  
      )}
    </ul>
  );
};

// TODO: rework grid.png and import green versions of icons