"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  from: number;
  to: number;
  text: string;
};

export default function AnimatedCounter({ from, to, text }: Props) {
  const [counter, setCounter] = useState(from);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < to) {
          return Math.min(prev + Math.ceil((to - from) / 50), to);
        }
        clearInterval(interval);
        return prev;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [from, to, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <p className="font-handwritten text-5xl text-title">
        {counter.toLocaleString()}+
      </p>
      <p className="font-roboto text-lg text-title">{text}</p>
    </motion.div>
  );
}
