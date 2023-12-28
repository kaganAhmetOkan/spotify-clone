import style from "./List.module.scss";
import PropTypes from "prop-types";
import Image from "next/image";

export default function ViewList({ list, view, setView, smallIconSize }) {
  return (
    <ul className={style.main}>
      <li>View as</li>
      {list.map(item =>
        <li key={item}>
          <button
            className={style.button}
            onClick={() => setView(item)}
            data-selected={view === item}
          >
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

ViewList.propTypes = {
  list: PropTypes.array.isRequired,
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
  smallIconSize: PropTypes.number.isRequired
};