import style from "./Browser.module.scss";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Suggestions from "../Suggestions/Suggestions";

export default function Browser() {
  return (
    <main className={style.main}>
      <Header />
      <Hero />
      <Suggestions />
    </main>
  );
};