import style from "./Sidebar.module.scss";
import Nav from "../Nav/Nav";
import Library from "../Library/Library";

export default function Sidebar() {
  const iconSize = 28;

  return (
    <div className={style.main}>
      <Nav iconSize={iconSize} />
      <Library iconSize={iconSize} />
    </div>
  );
};