"use client";
import CustomButton from "@/app/components/button";
import ImageUpload from "@/app/components/imageUpload";
import Input from "@/app/components/input";
import Loader from "@/app/components/loader";
import NavigationLinks from "@/app/components/navigationLinks";
import SelectCity from "@/app/components/selectCity";
import { Departure } from "@/app/interfaces/departure";
import { Travel } from "@/app/interfaces/travel";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Edit() {
  const params = useParams();
  const id = params?.id as string;

  const [images, setImages] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [departures, setDepartures] = useState<Departure[]>([]);
  const [deletedDepartures, setDeletedDepartures] = useState<number[]>([]);
  const [deletedImages, setDeletedImages] = useState<string[]>([]);

  const [initialTravel, setInitialTravel] = useState<Travel>();
  const [initialDepartures, setInitialDepartures] = useState<Departure[]>([]);
  const [initialImagesUrls, setInitialImagesUrls] = useState<string[]>([]);

  const [resetTrigger] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);
  const [travel, setTravel] = useState<Travel>({
    id: -1,
    title: "",
    location: "",
    date: undefined,
    price: -1,
    number_of_seats: -1,
    duration: -1,
    description: "",
  });

  useEffect(() => {
    const fetchTravel = async () => {
      try {
        setLoadingPage(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ROOT_URL}/api/travel?id=${id}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch travel data");
        }
        const data = await res.json();

        setTravel({
          id: data.id,
          title: data.title,
          location: data.location,
          date: new Date(data.date),
          price: data.price.toString(),
          number_of_seats: data.number_of_seats.toString(),
          duration: data.duration.toString(),
          description: data.description,
        });
        setDepartures(data.departures);
        setImageUrls(data.images);

        setInitialTravel({
          id: data.id,
          title: data.title,
          location: data.location,
          date: new Date(data.date),
          price: data.price.toString(),
          number_of_seats: data.number_of_seats.toString(),
          duration: data.duration.toString(),
          description: data.description,
        });
        setInitialDepartures(data.departures);
        setInitialImagesUrls(data.images);
      } catch (error) {
        toast.error("Greška prilikom učitavanja podataka o putovanju." + error);
      } finally {
        setLoadingPage(false);
      }
    };

    fetchTravel();
  }, [id]);

  const handleDeparturesChange = (updatedDepartures: Departure[]) => {
    const removed = departures.filter(
      (dep) => !updatedDepartures.some((updDep) => updDep.id === dep.id)
    );
    setDeletedDepartures(removed.map((dep) => dep.id || -1));
    setDepartures(updatedDepartures);
  };

  const handleImagesChange = (newFiles?: File[], changedUrls?: string[]) => {
    if (newFiles != undefined) setImages(newFiles);

    if (changedUrls !== undefined) {
      const removedUrls = imageUrls.filter((url) => !changedUrls.includes(url));
      setDeletedImages((prevDeletedImages) => {
        const updatedDeletedImages = [...prevDeletedImages, ...removedUrls];
        // console.log(updatedDeletedImages);
        return updatedDeletedImages;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (
        JSON.stringify(initialTravel) === JSON.stringify(travel) &&
        JSON.stringify(initialDepartures) === JSON.stringify(departures) &&
        JSON.stringify(initialImagesUrls) === JSON.stringify(imageUrls) &&
        images.length === 0 &&
        deletedImages.length === 0
      ) {
        return;
      }

      const formData = new FormData(e.currentTarget);

      if (
        !travel.id ||
        !travel.title ||
        !travel.location ||
        !travel.date ||
        !travel.price ||
        !travel.number_of_seats ||
        !travel.duration ||
        !travel.description
      ) {
        toast.error("Sva polja moraju biti popunjena!");
        return;
      }

      if (images.length === 0 && imageUrls.length === 0) {
        toast.error("Morate dodati barem jednu sliku!");
        return;
      }

      if (departures.length === 0) {
        toast.error("Morate dodati barem jedan polazak!");
        return;
      }

      setLoading(true);
      formData.append("id", travel.id.toString());
      formData.append("title", travel.title);
      formData.append("title", travel.title);
      formData.append("destination", travel.location);
      formData.append("date", travel.date.toString());
      formData.append("price", travel.price.toString());
      formData.append("seats", travel.number_of_seats.toString());
      formData.append("duration", travel.duration.toString());
      formData.append("description", travel.description);

      formData.append("departures", JSON.stringify(departures));
      if (deletedDepartures.length > 0) {
        formData.append(
          "deletedDepartures[]",
          JSON.stringify(deletedDepartures)
        );
      }

      images.forEach((image) => {
        formData.append("images[]", image);
      });
      if (deletedImages.length > 0) {
        formData.append("deletedImages[]", JSON.stringify(deletedImages));
      }

      // formData.forEach((value, key) => {
      //   console.log(key, value);
      // });

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_ROOT_URL}/api/travel`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (res.ok) {
        toast.success("Putovanje uspešno ažurirano!");
      } else {
        toast.error("Greška prilikom ažuriranja putovanja.");
      }
    } catch (error) {
      toast.error("Došlo je do greške: " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="CreateSection w-full bg-[url('/images/dashboard_bg.svg')] bg-no-repeat bg-center bg-cover pb-24">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="pt-32">
            <div className="mb-10">
              <NavigationLinks
                prevText="Početna"
                prevLink="/"
                currentText="Izmeni putovanje"
              />
            </div>
            <div className=" bg-form backdrop-blur-md rounded-3xl min-h-screen md:rounded-[40px]">
              {loadingPage ? (
                <Loader />
              ) : (
                <>
                  <div className="flex flex-col md:flex-row flex-wrap">
                    <div className="flex-1 md:p-9 p-9">
                      <Input
                        labelText="Naslov"
                        placeholderValue="Unesite naslov putovanja"
                        inputType="text"
                        name="title"
                        value={travel.title}
                        onChange={(e) =>
                          setTravel({ ...travel, title: e.target.value })
                        }
                      />
                      <Input
                        labelText="Destinacija"
                        placeholderValue="Unesite ime destinacije"
                        inputType="text"
                        name="destination"
                        value={travel.location}
                        onChange={(e) =>
                          setTravel({ ...travel, location: e.target.value })
                        }
                      />
                      <div className="lg:flex gap-5">
                        <div className="md:flex-1">
                          <Input
                            labelText="Datum"
                            placeholderValue="Izaberite datum polaska"
                            inputType="date"
                            name="date"
                            value={travel.date?.toISOString().split("T")[0]}
                            onChange={(e) =>
                              setTravel({
                                ...travel,
                                date: new Date(e.target.value),
                              })
                            }
                          />
                        </div>
                        <div className="md:flex-1">
                          <Input
                            labelText="Cena"
                            placeholderValue="Unesite cenu"
                            inputType="number"
                            name="price"
                            value={travel.price?.toString()}
                            onChange={(e) =>
                              setTravel({
                                ...travel,
                                price: Number(e.target.value),
                              })
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <SelectCity
                          intialDepartures={departures}
                          onDeparturesChange={handleDeparturesChange}
                          resetTrigger={resetTrigger}
                        />
                      </div>
                    </div>
                    <div className="flex-1 md:p-9 p-9">
                      <div className="md:flex gap-5">
                        <div className="md:flex-1">
                          <Input
                            labelText="Broj mesta"
                            placeholderValue="Unesite broj mesta"
                            inputType="number"
                            name="seats"
                            value={travel.number_of_seats?.toString()}
                            onChange={(e) =>
                              setTravel({
                                ...travel,
                                number_of_seats: Number(e.target.value),
                              })
                            }
                          />
                        </div>
                        <div className="md:flex-1">
                          <Input
                            labelText="Trajanje putovanja"
                            placeholderValue="Unesite trajanje u danima"
                            inputType="number"
                            name="duration"
                            value={travel.duration?.toString()}
                            onChange={(e) =>
                              setTravel({
                                ...travel,
                                duration: Number(e.target.value),
                              })
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <p className="font-roboto my-3">Opis</p>
                        <textarea
                          className="w-full h-44 resize-none rounded-3xl py-3 px-6"
                          placeholder="Unesite opis putovanja"
                          name="description"
                          value={travel.description}
                          onChange={(e) =>
                            setTravel({
                              ...travel,
                              description: e.target.value,
                            })
                          }
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <ImageUpload
                    onImagesChange={handleImagesChange}
                    initialImages={imageUrls}
                    resetTrigger={resetTrigger}
                  />
                  <div className="flex justify-end md:p-12 p-9">
                    <div className="w-fit">
                      <CustomButton
                        text="Ažuriraj putovanje"
                        icon="check"
                        padding="px-10 py-3"
                        radius="xl"
                        color="text"
                        type="submit"
                        loading={loading}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
