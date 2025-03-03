import { convertBlobUrlToFile } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import CustomIcon from "./icon";

type Props = {
  onImagesChange: (files?: File[], urls?: string[]) => void;
  initialImages?: string[];
  resetTrigger: boolean;
};

export default function ImageUpload({
  onImagesChange,
  initialImages,
  resetTrigger,
}: Props) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    if (resetTrigger) setImageUrls([]);
    if (initialImages) setImageUrls(initialImages);
  }, [initialImages, resetTrigger]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const newImageUrls = filesArray.map((file) => URL.createObjectURL(file));

      setImageUrls((prevImageUrls) => [...prevImageUrls, ...newImageUrls]);

      const files = await Promise.all(newImageUrls.map(convertBlobUrlToFile));

      onImagesChange(files);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = imageUrls.filter((_, i) => i !== index);
    setImageUrls(updatedImages);
    onImagesChange(undefined, updatedImages);
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
            onChange={handleImageChange}
            className="w-full h-full opacity-0 absolute top-0 left-0 cursor-pointer"
          />
          <CustomIcon name="add_2" color="#717171" size={60} />
        </div>

        {imageUrls.map((url, index) => (
          <div key={index} className="relative">
            <button
              className="bg-white rounded-full w-fit h-fit flex justify-center items-center p-[2px] absolute top-1 right-1 z-10"
              onClick={() => handleRemoveImage(index)}
            >
              <CustomIcon name="close" color="#717171" />
            </button>
            <Image
              src={url}
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
