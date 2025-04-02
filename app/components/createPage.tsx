"use client";
import CustomButton from "@/app/components/button";
import ImageUpload from "@/app/components/imageUpload";
import Input from "@/app/components/input";
import NavigationLinks from "@/app/components/navigationLinks";
import SelectCity from "@/app/components/selectCity";
import { Departure } from "@/app/interfaces/departure";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function CreatePage() {
  const [images, setImages] = useState<File[]>([]);
  const [departures, setDepartures] = useState<Departure[]>([]);
  const [resetTrigger, setResetTrigger] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoading = (value: boolean) => {
    setLoading(value);
  };

  const handleDeparturesChange = (updatedDepartures: Departure[]) => {
    setDepartures(updatedDepartures);
  };

  const handleImagesChange = (newFiles?: File[]) => {
    if (newFiles !== undefined) setImages(newFiles);
  };

  useEffect(() => {
    if (resetTrigger) {
      setResetTrigger(false);
    }
  }, [resetTrigger]);

  useEffect(() => {
    console.log("Ažuriran images state:", images);
  }, [images]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);

      const form = e.currentTarget;
      const title = form.title.valueOf;
      const destination = form.destination.value;
      const date = form.date.value;
      const price = form.price.value;
      const seats = form.seats.value;
      const duration = form.duration.value;
      const description = form.description.value;

      if (
        !title ||
        !destination ||
        !date ||
        !price ||
        !seats ||
        !duration ||
        !description
      ) {
        toast.error("Sva polja moraju biti popunjena!");
        return;
      }

      if (images.length <= 3) {
        toast.error("Morate dodati barem cetiri slike!");
        return;
      }

      if (departures.length === 0) {
        toast.error("Morate dodati barem jedan polazak!");
        return;
      }

      handleLoading(true);
      formData.append("departures", JSON.stringify(departures));
      images.forEach((image) => {
        formData.append("images[]", image);
      });

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_ROOT_URL}/api/travel`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        toast.success("Putovanje uspešno kreirano!");
        setResetTrigger(true);
        setImages([]);
        setDepartures([]);
        form.reset();
      } else {
        toast.error("Greška prilikom kreiranja putovanja.");
      }
      handleLoading(false);
    } catch (error) {
      toast.error("Došlo je do greške: " + error);
      handleLoading(false);
    }
  };

  return (
    <>
      <section className="CreateSection w-full bg-[url('/images/dashboard_bg.svg')] bg-no-repeat bg-center bg-cover pb-24">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="pt-32">
              <div className="mb-10">
                <NavigationLinks
                  prevText="Početna"
                  prevLink="/"
                  currentText="Kreiraj putovanje"
                />
              </div>
              <div className="bg-form backdrop-blur-md rounded-3xl md:rounded-[40px]">
                <div className="flex flex-col md:flex-row flex-wrap">
                  <div className="flex-1 md:p-9 p-6">
                    <Input
                      labelText="Naslov"
                      placeholderValue="Unesite naslov putovanja"
                      inputType="text"
                      name="title"
                    />
                    <Input
                      labelText="Destinacija"
                      placeholderValue="Unesite ime destinacije"
                      inputType="text"
                      name="destination"
                    />
                    <div className="lg:flex gap-5">
                      <div className="md:flex-1">
                        <Input
                          labelText="Datum"
                          placeholderValue="Izaberite datum polaska"
                          inputType="date"
                          name="date"
                        />
                      </div>
                      <div className="md:flex-1">
                        <Input
                          labelText="Cena (€)"
                          placeholderValue="Unesite cenu"
                          inputType="number"
                          name="price"
                        />
                      </div>
                    </div>
                    <div>
                      <SelectCity
                        onDeparturesChange={handleDeparturesChange}
                        resetTrigger={resetTrigger}
                      />
                    </div>
                  </div>
                  <div className="flex-1 md:p-9 p-6">
                    <div className="md:flex gap-5">
                      <div className="md:flex-1">
                        <Input
                          labelText="Broj mesta"
                          placeholderValue="Unesite broj mesta"
                          inputType="number"
                          name="seats"
                        />
                      </div>
                      <div className="md:flex-1">
                        <Input
                          labelText="Trajanje putovanja"
                          placeholderValue="Unesite trajanje u danima"
                          inputType="number"
                          name="duration"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-roboto my-3">Opis</p>
                      <textarea
                        className="w-full h-44 resize-none rounded-3xl py-3 px-6"
                        placeholder="Unesite opis putovanja"
                        name="description"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <ImageUpload
                  onImagesChange={handleImagesChange}
                  resetTrigger={resetTrigger}
                />
                <div className="flex justify-end md:p-12 p-6">
                  <div className="w-fit">
                    <CustomButton
                      text="Postavi putovanje"
                      icon="check"
                      padding="px-10 py-3"
                      radius="xl"
                      color="text"
                      type="submit"
                      loading={loading}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
