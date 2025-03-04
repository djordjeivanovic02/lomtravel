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
import { useState } from "react";
import { toast } from "react-toastify";
import CustomButton from "./button";
import Input from "./input";

type Props = {
  title: string;
  passengers: number;
};

export default function ReserveDialog({ title, passengers }: Props) {
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
      <CustomButton
        text="Rezervisi sada"
        icon="call_made"
        radius="lg"
        action={() => setIsOpen(true)}
      />
      <AlertDialogContent className="rounded-xl max-w-4xl" style={{maxHeight: "700px", overflow: "auto", marginLeft: "20px", marginRight: "20px"}}>
        <AlertDialogHeader>
          <AlertDialogTitle className="font-roboto text-2xl font-semibold text-center">
            {title}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="w-full flex flex-col md:flex-row gap-6 mt-5">
          <Input
            labelText="Email"
            placeholderValue="Unesite Vasu email adresu"
            inputType="text"
            name="title"
            border="border"
          />
          <Input
            labelText="Broj Telefona"
            placeholderValue="Unesite broj telefona"
            inputType="text"
            name="title"
            border="border"
          />
        </div>
        <div className="w-full">
          {Array.from({ length: passengers }).map((_, index) => {
            return (
              <fieldset
                key={index}
                className="border border-border p-4 w-full font-roboto mb-4"
              >
                <legend>Putnik broj {index+1}.</legend>
                <div className="w-full flex flex-col md:flex-row gap-6">
                  <Input
                    labelText="Email"
                    placeholderValue="Unesite Vasu email adresu"
                    inputType="text"
                    name="title"
                    border="border"
                  />
                  <Input
                    labelText="Broj Telefona"
                    placeholderValue="Unesite broj telefona"
                    inputType="text"
                    name="title"
                    border="border"
                  />
                </div>
              </fieldset>
            );
          })}
        </div>
        <AlertDialogFooter className="justify-center">
          <AlertDialogCancel
            disabled={loadingIndex !== null}
            onClick={() => setIsOpen(false)}
          >
            Zatvori
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
