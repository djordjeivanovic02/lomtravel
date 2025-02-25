import CustomButton from "@/app/components/button";
import ImageUpload from "@/app/components/imageUpload";
import Input from "@/app/components/input";
import SelectCity from "@/app/components/selectCity";

export default function Create() {
  return (
    <div className="container bg-[url('/images/dashboard_bg.svg')] bg-cover bg-center min-h-screen">
      <div className="mt-32 bg-form backdrop-blur-md rounded-3xl md:rounded-[40px]">
        <div className="flex flex-wrap">
          <div className="flex-1 md:p-12 p-9">
            <Input
              labelText="Naslov"
              placeholderValue="Unesite naslov putovanja"
              inputType="text"
            />
            <div className="md:flex gap-5">
              <div className="md:flex-1">
                <Input
                  labelText="Datum"
                  placeholderValue="Izaberite datum polaska"
                  inputType="date"
                />
              </div>
              <div className="md:flex-1">
                <Input
                  labelText="Cena"
                  placeholderValue="Unesite cenu"
                  inputType="number"
                />
              </div>
            </div>
            <div>
              <SelectCity />
            </div>
          </div>
          <div className="flex-1 md:p-12 p-9">
            <div className="md:flex gap-5">
              <div className="md:flex-1">
                <Input
                  labelText="Broj mesta"
                  placeholderValue="Unesite broj mesta"
                  inputType="number"
                />
              </div>
              <div className="md:flex-1">
                <Input
                  labelText="Trajanje putovanja"
                  placeholderValue="Unesite trajanje u danima"
                  inputType="number"
                />
              </div>
            </div>
            <div>
              <p className="font-roboto my-3">Opis</p>
              <textarea
                className="w-full h-44 resize-none rounded-3xl py-3 px-6 "
                placeholder="Unesite opis putovanja"
              ></textarea>
            </div>
          </div>
        </div>
        <ImageUpload />
        <div className="flex justify-end md:p-12 p-9">
          <div className="w-fit">
            <CustomButton
              text="Postavi putovanje"
              icon="check"
              padding="px-10 py-3"
              radius="xl"
              color="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
