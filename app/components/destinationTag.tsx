"use client";
import CustomIcon from "./customicon";
import { motion } from "framer-motion";

type Props = {
  title: string;
  desc: string;
  icon: string;
  delay?: number;
};

export default function DestinationTag({
  title,
  desc,
  icon,
  delay = 0,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: delay }}
      className="flex items-center gap-2"
    >
      <div className="flex justify-center rounded-lg border-border border p-3">
        <CustomIcon name={icon} size={20} color="#05073C" />
      </div>
      <div className="font-roboto text-text">
        <p>{title}</p>
        <span className="font-light">{desc}</span>
      </div>
    </motion.div>
  );
}
