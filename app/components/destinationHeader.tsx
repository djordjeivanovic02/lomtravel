"use client";
import CustomIcon from "./customicon";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";

type Props = {
  title: string;
  location: string;
};
export default function DestinationHeader({ title, location }: Props) {
  const pathname = usePathname();
  const fullUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${pathname}`
      : "";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      toast.success("Putanja do ove destinacije uspesno kopirana");
    } catch (err) {
      console.error("Failed to copy URL: ", err);
    }
  };

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="md:text-6xl text-4xl text-title font-bold"
      >
        {title}
      </motion.h1>
      <div className="flex justify-between py-7">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center"
        >
          <CustomIcon name="location_on" size={19} color="#05073c" />
          <p className="text-roboto text-text">{location}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="cursor-pointer"
        >
          <div title="Kopiraj putanju do ove destinacije" onClick={copyToClipboard}>
            <CustomIcon name="content_copy" size={19} color="#05073c"/>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
