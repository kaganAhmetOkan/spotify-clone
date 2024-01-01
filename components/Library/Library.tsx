"use client";
import style from "./Library.module.scss";
import LibraryButton from "../LibraryButton/LibraryButton";
import LibrarySearch from "../LibrarySearch/LibrarySearch";
import LibraryFilter from "../LibraryFilter/LibraryFilter";
import LibraryFolder from "../LibraryFolder/LibraryFolder";
import dummyFolders from "@/public/json/dummy_library_folders.json";
import { useAtomValue } from "jotai";
import { minimizedAtom, enlargedAtom } from "@/store";

export default function Library() {
  const minimized = useAtomValue(minimizedAtom);
  const enlarged = useAtomValue(enlargedAtom);
  
  return (
    <div className={style.main} data-enlarged={enlarged} data-minimized={minimized}>
      <LibraryButton/>
      <div className={style.scrollable}>
        <div className={style.filter}>
          <LibrarySearch/>
          <LibraryFilter/>
        </div>
        <div className={style.tab}>
          <span>Title</span>
          <span>Date Added</span>
          <span>Played</span>
        </div>
        <div className={style.folders}>
          {dummyFolders.map(folder =>
            <LibraryFolder
            key={folder.title}
            folder={folder}
          />
          )}
        </div>
      </div>
    </div>
  );
};