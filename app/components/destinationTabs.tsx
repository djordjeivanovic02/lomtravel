"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import DeparturesTable from "./departuresTable";

export default function DestinationTabs() {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            Ovo je descripcija
          </motion.p>
        );
      case "departures":
        return (
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <DeparturesTable />
          </motion.p>
        );
      case "notes":
        return (
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            Ovo su napomene
          </motion.p>
        );
      default:
        return null;
    }
  };

  return (
    <div>
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
    </div>
  );
}
