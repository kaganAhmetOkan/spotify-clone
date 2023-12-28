import { useEffect } from "react";

export default function useBindDropdown(parentRef, dropdownRef) {
  useEffect(() => {
    const parentHeight = parentRef.current.clientHeight;
    const parentY = parentRef.current.offsetTop;
    const parentX = parentRef.current.offsetLeft;

    const top = parentY + parentHeight;
    const left = parentX;

    dropdownRef.current.style.top = `${top}px`;
    dropdownRef.current.style.left = `${left}px`;
  }, [parentRef, dropdownRef]);
};