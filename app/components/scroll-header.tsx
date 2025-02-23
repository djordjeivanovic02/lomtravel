"use client";

import { useState } from "react";
import { useScroll } from "../hooks/useScroll";
import Header from "./header";

export default function ScrollHeader() {
  const isScrolled = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header
      isScrolled={isScrolled}
      isOpen={isOpen}
      toggleMenu={() => setIsOpen(!isOpen)}
    />
  );
}
