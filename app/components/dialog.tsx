"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { DialogActions } from "../interfaces/dialogAction";

type Props = {
  children: React.ReactNode;
  title: string;
  description?: string;
  actions: DialogActions[];
};

export default function CustomDialog({
  children,
  title,
  description,
  actions,
}: Props) {
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = async (action: () => Promise<void>, index: number) => {
    setLoadingIndex(index);
    try {
      await action();
      setIsOpen(false);
      toast.success("Uspešno obrisano putovanje");
    } catch (error) {
      if (error instanceof Error)
        toast.error(
          "Došlo je do greške prilikom brisanja putovanja. Pokušajte kasnije."
        );
    } finally {
      setLoadingIndex(null);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button onClick={() => setIsOpen(true)}>{children}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed z-50 top-1/2 left-1/2 w-96 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg" style={{width: "90%"}}>
          <div className="flex justify-between items-center border-b pb-2">
            <Dialog.Title className="text-lg font-semibold">
              {title}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </Dialog.Close>
          </div>
          {description && (
            <Dialog.Description className="text-gray-600 mt-2">
              {description}
            </Dialog.Description>
          )}
          <div className="flex justify-end gap-3 mt-4">
            <Dialog.Close asChild>
              <button
                disabled={loadingIndex !== null}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Zatvori
              </button>
            </Dialog.Close>
            {actions.map((act, index) => (
              <button
                key={act.title}
                style={{ backgroundColor: act.color }}
                className="px-4 py-2 text-white rounded"
                onClick={() => handleClick(act.action, index)}
                disabled={loadingIndex === index}
              >
                {loadingIndex === index ? (
                  <Image
                    src="gifs/loading.svg"
                    width={24}
                    height={24}
                    alt="Loading"
                  />
                ) : (
                  act.title
                )}
              </button>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
