import { useEffect, useState } from "react";

export default function useBind(target) {
  const [style, setStyle] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const top = target.current.offsetTop;
    const left = target.current.offsetLeft;
    const height = target.current.clientHeight;

    setStyle({ top: `${top + height}px`, left: `${left}px` });
  }, [target]);

  return style;
};