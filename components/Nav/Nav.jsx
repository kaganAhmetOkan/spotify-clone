"use client";
import style from "./Nav.module.scss";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav({ iconSize }) {
  const path = usePathname();
  const atHome = path === "/home";
  const atSearch = path === "/search";

  const homeIcon = atHome ? "/icons/home_filled.png" : "/icons/home.png";
  const searchIcon = atSearch ? "/icons/search_filled.png" : "/icons/search.png";
  
  return (
    <nav className={style.main}>
      <Link href={`/home`} className={style.link} data-active={atHome}>
        <Image src={homeIcon} alt="home" width={iconSize} height={iconSize} />
        <span>Home</span>
      </Link>
      <Link href={"/search"} className={style.link} data-active={atSearch}>
        <Image src={searchIcon} alt="search" width={iconSize} height={iconSize} />
        <span>Search</span>
      </Link>
    </nav>
  );
};

Nav.propTypes = {
  iconSize: PropTypes.number.isRequired,
};