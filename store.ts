import { atom } from "jotai";

export const iconSizeAtom = atom(24);
export const mediumIconSizeAtom = atom(20);
export const smallIconSizeAtom = atom(16);
export const thumbnailSizeAtom = atom(48);
export const mediumThumbnailSizeAtom = atom(64);

export const minimizedAtom = atom(false);
export const enlargedAtom = atom(false);
export const aboutAtom = atom(true);
export const likedAtom = atom(false);
export const followingAtom = atom(false);
export const heroColorAtom = atom("none");

interface CurrentTrack {
  readonly title: string;
  readonly playlist?: string;
  readonly creators: string[];
  readonly thumbnail: string;
  readonly duration: number;
  progress: number;
}

export const currentTrackAtom = atom<CurrentTrack>({
  title: "Stand Off",
  creators: ["MEMBA", "Ehiorobo"],
  thumbnail: "/images/placeholder.png",
  duration: 204,
  progress: 0,
});