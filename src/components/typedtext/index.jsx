import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText() {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["FRONTEND DEVELOPER", "UI / UX DESIGNER"],
      typeSpeed: 70,
      startDelay: 1000,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span
      className="text-xs font-bold tracking-widest"
      ref={typedTextRef}
    ></span>
  );
}
