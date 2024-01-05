"use client";
import style from "./Header.module.scss";
import Image from "next/image";
import { useAtomValue } from "jotai";
import { smallIconSizeAtom } from "@/store";

export default function Header() {
  const iconSize = useAtomValue(smallIconSizeAtom);
  
  return (
    <header className={style.main}>
      <div className={style.navigation}>
        <button>
          <Image
            src={"/icons/back.png"}
            alt="back"
            width={iconSize}
            height={iconSize}
            className={style.icon}
          />
        </button>
        <button>
          <Image
            src={"/icons/forward.png"}
            alt="back"
            width={iconSize}
            height={iconSize}
            className={style.icon}
          />
        </button>
      </div>
      <div className={style.navigation}>
        <button>
          <Image
            src={"/icons/bell.png"}
            alt="notifications"
            width={iconSize}
            height={iconSize}
          />
        </button>
        <button>
          <Image
            src={"/icons/friends.png"}
            alt="friends"
            width={iconSize}
            height={iconSize}
          />
        </button>
        <button>
          <Image
            src={"/icons/user.png"}
            alt="user"
            width={iconSize}
            height={iconSize}
          />
        </button>
      </div>
    </header>
  );
};