import style from "./List.module.scss";
import PropTypes from "prop-types";

export default function SortList({ list, sort, setSort }) {
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

SortList.propTypes = {
  list: PropTypes.array.isRequired,
  sort: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
};