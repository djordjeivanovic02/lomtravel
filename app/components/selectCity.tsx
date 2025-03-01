import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Departure } from "../interfaces/departure";
import CustomIcon from "./icon";
import Input from "./input";

interface Props {
  onDeparturesChange: (departures: Departure[]) => void;
  resetTrigger: boolean;
}

export default function SelectCity({
  onDeparturesChange,
  resetTrigger,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [departures, setDepartures] = useState<Departure[]>([]);
  const [newCity, setNewCity] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [extraCharge, setExtraCharge] = useState("");

  useEffect(() => {
    if (resetTrigger) setDepartures([]);
  }, [resetTrigger]);

  const handleAddDeparture = () => {
    if (newCity.trim() !== "" && departureTime.trim() !== "") {
      const newDeparture = {
        city: newCity,
        time: departureTime,
        price: extraCharge.trim() === "" ? 0 : Number(extraCharge),
      };

      const updatedDepartures = [...departures, newDeparture];
      setDepartures(updatedDepartures);
      onDeparturesChange(updatedDepartures);

      setNewCity("");
      setDepartureTime("");
      setExtraCharge("");
      setIsOpen(false);
    } else {
      toast.error("Morate popuniti sva polja");
    }
  };

  const handleRemoveDeparture = (timeToRemove: string) => {
    const updatedDepartures = departures.filter(
      (departure) => departure.time !== timeToRemove
    );
    setDepartures(updatedDepartures);
    onDeparturesChange(updatedDepartures);
  };

  return (
    <div className="relative">
      <p className="font-roboto my-3">Mesta polaska</p>
      <div className="flex flex-wrap items-center gap-x-3">
        <button
          className="bg-title h-fit px-4 py-2 text-white rounded-full"
          onClick={() => setIsOpen(true)}
          type="button"
        >
          Dodaj polazak
        </button>
        {departures.map((departure) => (
          <div
            key={departure.time}
            className="flex items-center my-2 bg-white w-fit px-4 py-2 rounded-full gap-3"
          >
            <span>{departure.city}</span>
            <span>{departure.time}</span>
            <span>{departure.price} €</span>
            <button
              className="flex items-center "
              onClick={() => handleRemoveDeparture(departure.time)}
            >
              <CustomIcon name="close" color="#717171" />
            </button>
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 drop-shadow-[0_0_20px_rgba(0,0,0,0.25)]"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-xl shadow-lg w-96 bg-form backdrop-blur-md md:rounded-[40px]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-2 font-semibold">Dodaj polazak</h3>

            {/* Grad */}
            <Input
              inputType="text"
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
              placeholderValue="Unesite grad"
              labelText="Grad"
              border="border border-border"
            />

            {/* Vreme polaska */}
            <Input
              inputType="time"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
              placeholderValue="Unesite vreme polaska"
              labelText="Vreme polaska"
              border="border border-border"
            />

            {/* Doplata */}
            <Input
              inputType="number"
              value={extraCharge}
              onChange={(e) => setExtraCharge(e.target.value)}
              placeholderValue="Unesite doplatu"
              labelText="Doplata"
              border="border border-border"
            />

            <div className="flex justify-end gap-2 mt-3 text-white rounded-full">
              <button
                className="bg-main flex items-center px-6 py-2 rounded-full"
                onClick={handleAddDeparture}
              >
                <CustomIcon name="check" />
              </button>
              <button
                className="bg-red flex items-center px-6 py-2 rounded-full"
                onClick={() => setIsOpen(false)}
              >
                <CustomIcon name="close" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
