import style from "./Browser.module.scss";
import Hero from "../Hero/Hero";

export default function Browser() {
  return (
    <main className={style.main}>
      <Hero />
    </main>
  );
};