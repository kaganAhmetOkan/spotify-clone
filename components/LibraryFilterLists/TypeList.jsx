import style from "./List.module.scss";
import PropTypes from "prop-types";

export default function TypeList({ list, type, setType }) {
  
  function updateType(item) {
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

TypeList.propTypes = {
  list: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
};