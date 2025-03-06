"use client";
import React, { useEffect, useState } from "react";
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

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setChecked(newChecked);

    try {
      const formData = new FormData();
      formData.append("id", id.toString());
      formData.append("status", newChecked ? "1" : "0");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_ROOT_URL}api/travel`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!response.ok) {
        toast.error("Greska pri dodavanju u popularne.");
      } else {
        if (newChecked) toast.success("Putovanje uspesno dodato u popularne");
        else toast.success("Putovanje uspesno uklonjeno iz popularnih");
      }
    } catch (error) {
      console.error("Greska", error);
    }
  };

  return (
    <div className="flex items-center text-text">
      <input
        type="checkbox"
        id={`ispopular-${id}`}
        className="w-[31px] h-[31px] accent-green-600"
        title="Popularno"
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}
