"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DialogActions } from "../interfaces/dialogAction";
import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
  title: string;
  description?: string;
  actions: DialogActions[];
};

export default function Dialog({
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
    } catch (error) {
      toast.error(
        "Doslo je do greske prilikom brisanja putovanja. Pokusajte kasnije"
      );
    } finally {
      setLoadingIndex(null);
      toast.success("Uspesno obrisano putovanje");
    }
  };
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger onClick={() => setIsOpen(true)}>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent className="rounded-xl max-w-96">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-roboto text-base font-semibold">
            {title}
          </AlertDialogTitle>
          {description && (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter className="justify-center">
          <AlertDialogCancel disabled={loadingIndex !== null} onClick={() => setIsOpen(false)}>Zatvori</AlertDialogCancel>
          {actions
            ? actions.map((act, index) => (
                <AlertDialogAction
                  key={act.title}
                  style={{ backgroundColor: act.color }}
                  onClick={() => handleClick(act.action, index)}
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
                </AlertDialogAction>
              ))
            : ""}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
