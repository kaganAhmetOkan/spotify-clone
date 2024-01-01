"use client";
import style from "./Nav.module.scss";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAtomValue } from "jotai";
import { iconSizeAtom } from "@/store";

interface Params {
  readonly minimized: boolean;
};

export default function Nav({ minimized }: Params) {
  const path = usePathname();
  const atHome = path === "/home";
  const atSearch = path === "/search";
  const iconSize = useAtomValue(iconSizeAtom);

  const homeIcon = atHome ? "/icons/home_filled.png" : "/icons/home.png";
  const searchIcon = atSearch ? "/icons/search_filled.png" : "/icons/search.png";
  
  return (
    <nav className={style.main} data-minimized={minimized}>
      <Link href={`/home`} className={style.link} data-active={atHome}>
        <div className={style.icon}>
          <Image src={homeIcon} alt="home" width={iconSize} height={iconSize} />
        </div>
        <span>Home</span>
      </Link>
      <Link href={"/search"} className={style.link} data-active={atSearch}>
        <div className={style.icon}>
          <Image src={searchIcon} alt="search" width={iconSize} height={iconSize} />
        </div>
        <span>Search</span>
      </Link>
    </nav>
  );
};