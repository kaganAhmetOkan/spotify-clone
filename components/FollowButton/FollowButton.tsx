"use client";
import style from "./FollowButton.module.scss";
import { useAtom } from "jotai";
import { followingAtom } from "@/store";

export default function FollowButton() {
  const [following, setFollowing] = useAtom(followingAtom);
  const buttonContent = following ? "Unfollow" : "Follow";

  function toggleFollowing() {
    setFollowing(!following);
  };

  return (
    <button onClick={toggleFollowing} className={style.main}>
      {buttonContent}
    </button>
  );
};