"use client";

import { useScroll } from "../hooks/useScroll";
import Header from "./header";

export default function ScrollHeader() {
  const isScrolled = useScroll();

  return <Header isScrolled={isScrolled} />;
}
