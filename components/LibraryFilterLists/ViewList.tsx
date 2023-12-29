import style from "./List.module.scss";
import Image from "next/image";

interface Params {
  readonly list: string[];
  readonly view: string;
  readonly setView: (value: string) => void;
  readonly smallIconSize: number;
};

export default function ViewList({ list, view, setView, smallIconSize }: Params) {
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