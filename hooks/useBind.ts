import { useEffect, useState } from "react";

export default function useBind(target: { current: null | HTMLElement}) {
  const [style, setStyle] = useState({ top: "0px", left: "0px" });

  useEffect(() => {
    if (target.current === null) return;

    const top = target.current.offsetTop;
    const left = target.current.offsetLeft;
    const height = target.current.clientHeight;

    setStyle({ top: `${top + height}px`, left: `${left}px` });
  }, [target, target.current?.offsetTop, target.current?.offsetLeft]);

  return style;
};