import style from "./Sidebar.module.scss";
import Nav from "../Nav/Nav";

export default function Sidebar() {
  return (
    <div className={style.main}>
      <Nav />
    </div>
  );
};