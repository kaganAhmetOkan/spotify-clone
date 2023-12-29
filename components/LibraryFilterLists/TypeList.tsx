import style from "./List.module.scss";

interface Params {
  readonly list: string[];
  readonly type: string;
  readonly setType: (value: string) => void;
};

export default function TypeList({ list, type, setType }: Params) {
  
  function updateType(item: string) {
    if (type !== item) setType(item)
    else setType("");
  };

  return (
    <ul className={style.main}>
      <li>Type as</li>
      {list.map(item =>
        <li key={item}>
          <button
            className={style.button}
            onClick={() => updateType(item)}
            data-selected={type === item}
          >{item}</button>
        </li>  
      )}
    </ul>
  );
};