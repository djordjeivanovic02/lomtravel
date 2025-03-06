"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Props = {
  id: number;
  isPopular: number;
};

export default function Checkbox({ id, isPopular }: Props) {
  const [checked, setChecked] = useState(isPopular === 1);

  useEffect(() => {
    setChecked(isPopular === 1);
  }, [isPopular]);

  async function updateStatus(newChecked: boolean) {
    try {
      const formData = new FormData();
      formData.append("id", id.toString());
      formData.append("status", newChecked ? "1" : "0");

      const response = await fetch(`/api/travel`, {
        method: "PUT",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Greška pri ažuriranju.");
      }

      toast.success(
        newChecked
          ? "Putovanje uspešno dodato u popularne."
          : "Putovanje uspešno uklonjeno iz popularnih."
      );
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
      setChecked(!newChecked);
    }
  }

  return (
    <div className="flex items-center text-text">
      <input
        type="checkbox"
        id={`ispopular-${id}`}
        className="w-[31px] h-[31px] accent-green-600"
        title="Popularno"
        checked={checked}
        onChange={(e) => {
          const newChecked = e.target.checked;
          setChecked(newChecked);
          updateStatus(newChecked);
        }}
      />
    </div>
  );
}
