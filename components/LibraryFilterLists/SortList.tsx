import style from "./List.module.scss";

interface Params {
  readonly list: string[];
  readonly sort: string;
  readonly setSort: (value: string) => void;
};

export default function SortList({ list, sort, setSort }: Params) {
  return (
    <ul className={style.main}>
      <li>Sort by</li>
      {list.map(item =>
        <li key={item}>
          <button
            className={style.button}
            onClick={() => setSort(item)}
            data-selected={item === sort}
          >{item}</button>
        </li>  
      )}
    </ul>
  );
};