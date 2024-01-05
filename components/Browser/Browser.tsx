import style from "./Browser.module.scss";
import Hero from "../Hero/Hero";
import Suggestions from "../Suggestions/Suggestions";

export default function Browser() {
  return (
    <main className={style.main}>
      <Hero />
      <Suggestions />
    </main>
  );
};