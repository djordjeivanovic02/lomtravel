import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { toast } from "react-toastify";
import CustomButton from "./button";
import Input from "./input";
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import CustomIcon from "./icon";
import { sendMail } from "../api/mail/mail";
import { ReservationUser } from "../interfaces/reservationUser";

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
    try {
      e.preventDefault();

      const form = e.currentTarget;
      const email = form.email.value;
      const phone = form.phone.value;
      const users: ReservationUser[] = [];

      for (let i = 0; i < passengers; i++) {
        users.push({
          name: form[`name_${i}`].value,
          lastname: form[`lastname_${i}`].value,
        });
      }

      if (!email) {
        toast.error("Email je obavezno polje");
        return;
      }
      if (!phone) {
        toast.error("Broj Telefona je obavezno polje");
        return;
      }
      if (
        users.filter((user) => user.name === "" || user.lastname === "")
          .length !== 0
      ) {
        toast.error("Morate uneti podatke o svim putnicima");
        return;
      }
      setLoading(true);

      const res = await sendMail({
        email: email,
        phoneNumber: phone,
        users: users,
        destination: destination,
        date: formattedDate,
        arrivalTime: time.time,
        arrivalCity: city,
      });

      if (res === "Success") {
        toast.success("Uspesna rezervacija");
      } else {
        toast.error(
          "Doslo je do greske prilikom rezervacije. Molimo pokusajte kasnije"
        );
      }
      setIsOpen(false);
    } catch (error) {
      console.log(error);
      toast.error(
        "Doslo je do greske prilikom rezervacije. Molimo pokusajte kasnije"
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <AlertDialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
      <AlertDialogTrigger asChild>
        <CustomButton
          text="Rezervisi sada"
          icon="call_made"
          radius="lg"
          action={() => setIsOpen(true)}
          disabled={disabled}
        />
      </AlertDialogTrigger>
      <AlertDialogContent
        className="rounded-xl max-w-4xl p-10 z-[52]"
        style={{
          maxHeight: "1000px",
          overflow: "auto",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <AlertDialogHeader>
          <AlertDialogTitle className="font-roboto text-3xl font-semibold text-center">
            {title}
          </AlertDialogTitle>
          <CustomIcon name="close" color="black" />
        </AlertDialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="w-full flex flex-col md:flex-row gap-6 mt-5">
            <Input
              labelText="Email"
              placeholderValue="Unesite Vasu email adresu"
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
          <div className="w-full">
            {Array.from({ length: passengers }).map((_, index) => {
              return (
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
              );
            })}
            <p className="text-xl font-roboto text-end">
              Cena aranzmana:{" "}
              <span className="font-bold text-2xl">{totalPrice}€</span>
            </p>
          </div>
          <AlertDialogFooter className="justify-center">
            <CustomButton
              loading={loading}
              text="Rezervisi"
              className="rounded-full py-3 font-roboto font-bold hover:bg-title duration-300"
              type="submit"
            />
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
