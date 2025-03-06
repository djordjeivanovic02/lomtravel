"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { toast } from "react-toastify";
import { sendMail } from "../api/mail/mail";
import { ReservationUser } from "../interfaces/reservationUser";
import CustomButton from "./button";
import CustomIcon from "./icon";
import Input from "./input";

type SelectedCity = {
  time: string;
  price: number;
};

type Props = {
  title: string;
  passengers: number;
  totalPrice: number;
  destination: string;
  time: SelectedCity;
  date: Date;
  disabled: boolean;
  city: string;
};

export default function ReserveDialog({
  title,
  passengers,
  totalPrice,
  destination,
  time,
  date,
  disabled,
  city,
}: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const options = { day: "numeric", month: "long", year: "numeric" } as const;
  const formattedDate = new Intl.DateTimeFormat("sr-Latn-RS", options).format(
    new Date(date)
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const email = formData.get("email") as string;
      const phone = formData.get("phone") as string;
      const users: ReservationUser[] = [];

      for (let i = 0; i < passengers; i++) {
        users.push({
          name: formData.get(`name_${i}`) as string,
          lastname: formData.get(`lastname_${i}`) as string,
        });
      }

      if (!email) return toast.error("Email je obavezno polje");
      if (!phone) return toast.error("Broj Telefona je obavezno polje");
      if (users.some((user) => !user.name || !user.lastname))
        return toast.error("Morate uneti podatke o svim putnicima");

      setLoading(true);

      const res = await sendMail({
        email,
        phoneNumber: phone,
        users,
        destination,
        date: formattedDate,
        arrivalTime: time.time,
        arrivalCity: city,
      });

      if (res === "Success") {
        toast.success("Uspešna rezervacija");
        setIsOpen(false);
      } else {
        toast.error(
          "Došlo je do greške prilikom rezervacije. Pokušajte kasnije"
        );
      }
    } catch (error) {
      if (error instanceof Error)
        toast.error(
          "Došlo je do greške prilikom rezervacije. Pokušajte kasnije"
        );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <CustomButton
          text="Rezerviši sada"
          icon="call_made"
          radius="lg"
          action={() => setIsOpen(true)}
          disabled={disabled}
        />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 z-50" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl max-w-4xl p-10 bg-white shadow-xl z-50"
          style={{ maxHeight: "98%", overflow: "auto" }}
        >
          <Dialog.Title className="font-roboto text-3xl font-semibold text-center">
            {title}
          </Dialog.Title>
          <Dialog.Close asChild>
            <button className="absolute top-4 right-4">
              <CustomIcon name="close" color="black" />
            </button>
          </Dialog.Close>

          <form onSubmit={handleSubmit} className="mt-5">
            <div className="w-full flex flex-col md:flex-row gap-6">
              <Input
                labelText="Email"
                placeholderValue="Unesite Vašu email adresu"
                inputType="text"
                name="email"
                border="border"
              />
              <Input
                labelText="Broj Telefona"
                placeholderValue="Unesite broj telefona"
                inputType="text"
                name="phone"
                border="border"
              />
            </div>

            <div className="w-full mt-5">
              {Array.from({ length: passengers }).map((_, index) => (
                <fieldset
                  key={index}
                  className="border border-border p-4 w-full font-roboto mb-4 rounded-xl"
                >
                  <legend>Putnik broj {index + 1}.</legend>
                  <div className="w-full flex flex-col md:flex-row gap-6">
                    <Input
                      labelText="Ime"
                      placeholderValue="Unesite ime"
                      inputType="text"
                      name={`name_${index}`}
                      border="border"
                    />
                    <Input
                      labelText="Prezime"
                      placeholderValue="Unesite prezime"
                      inputType="text"
                      name={`lastname_${index}`}
                      border="border"
                    />
                  </div>
                </fieldset>
              ))}
              <p className="text-xl font-roboto text-end">
                Cena aranžmana:{" "}
                <span className="font-bold text-2xl">{totalPrice}€</span>
              </p>
            </div>

            <div className="flex justify-center mt-5">
              <CustomButton
                loading={loading}
                text="Rezerviši"
                className="rounded-full py-3 font-roboto font-bold hover:bg-title duration-300"
                type="submit"
              />
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}