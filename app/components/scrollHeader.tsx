"use client";

import { useEffect, useState } from "react";
import { useScroll } from "../hooks/useScroll";

export default function ScrollHeader() {
  const isScrolled = useScroll();

  const [height, setHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector("#header");
    if (header) {
      setHeight(header.clientHeight);
    }

    const handleResize = () => {
      if (header) {
        setHeight(header.clientHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 right-0 -z-10 transition-all duration-500  ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      } `}
      style={{ height }}
    ></div>
  );
}
