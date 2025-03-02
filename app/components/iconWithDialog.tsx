"use client";
import { useState } from "react";
import CustomIcon from "./icon";
import Dialog from "./dialog";
import { DialogActions } from "../interfaces/dialogAction";



type Props = {
  travelId: number;
};

export default function IconWithDialog({ travelId }: Props) {
  const buttonActions: DialogActions[] = [
    {
      title: "Obrisi",
      color: "#f38255",
      textColor: "#ffffff",
      action: async () => {
        await fetch(`http://localhost:3000/api/travel?id=${travelId}`, {
          method: "DELETE"
        });
      },
    },
  ];
  const [dialog, setDialog] = useState(false);
  const handleDialog = (value: boolean) => {
    setDialog(value);
  };
  return (
    <>
      <Dialog
        title="Da li ste sigurni da zelite da trajno obrisete ovu destinaciju?"
        actions={buttonActions}
      >
        <div
          className="bg-red rounded-md p-1 flex justify-center items-center cursor-pointer"
          onClick={() => handleDialog(true)}
        >
          <CustomIcon name="delete" size={24} />
        </div>
      </Dialog>
    </>
  );
}
