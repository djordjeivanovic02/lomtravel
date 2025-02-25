"use client";
import Image from "next/image";
import { useState } from "react";
import CustomIcon from "./icon";

export default function ImageUpload() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileReaders: Promise<string>[] = [];

    Array.from(files).forEach((file) => {
      if (!file.type.startsWith("image/")) return;

      const reader = new FileReader();
      fileReaders.push(
        new Promise((resolve) => {
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        })
      );
    });

    Promise.all(fileReaders).then((newImages) => {
      setUploadedImages((prev) => [
        ...prev,
        ...newImages.filter((img) => !prev.includes(img)),
      ]);
    });
  };

  const handleRemoveImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="md:px-12 md:pb-12 px-6 pb-6">
      <p className="font-roboto my-3">Slike</p>
      <div className="flex flex-wrap gap-5">
        <div className="w-32 h-32 rounded-xl bg-white flex justify-center items-center cursor-pointer relative">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="w-full h-full opacity-0 absolute top-0 left-0 cursor-pointer"
          />
          <CustomIcon name="add_2" color="#717171" size={60} />
        </div>

        {/* Prikaz uploadovanih slika */}
        {uploadedImages.map((imgSrc, index) => (
          <div key={index} className="relative">
            <button
              className="bg-white rounded-full w-fit h-fit flex justify-center items-center p-[2px] absolute top-1 right-1 z-10"
              onClick={() => handleRemoveImage(index)}
            >
              <CustomIcon name="close" color="#717171" />
            </button>
            <Image
              src={imgSrc}
              alt={`Uploaded ${index + 1}`}
              width={128}
              height={128}
              className="w-32 h-32 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
