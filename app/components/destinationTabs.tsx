"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Departure } from "../interfaces/departure";
import DeparturesTable from "./departuresTable";

type Props = {
  description: string;
  departures: Departure[];
};

export default function DestinationTabs({ description, departures }: Props) {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="whitespace-pre-line"
          >
            {description}
          </motion.div>
        );
      case "departures":
        return (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <DeparturesTable departures={departures} />
          </motion.div>
        );
      case "notes":
        return (
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            Trenutno nema napomena.
          </motion.p>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex gap-4 text-title">
        {["description", "departures", "notes"].map((tab) => (
          <motion.button
            key={tab}
            className={`px-4 py-2 ${
              activeTab === tab ? "font-bold border-b-2 border-main" : ""
            }`}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ color: activeTab === tab ? "#000" : "#555" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {tab === "description"
              ? "Opis putovanja"
              : tab === "departures"
              ? "Polasci"
              : "Napomene"}
          </motion.button>
        ))}
      </div>
      <div className="mt-4 text-text font-roboto">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </motion.div>
  );
}
