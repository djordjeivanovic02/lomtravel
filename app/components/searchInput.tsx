"use client";

import { useState } from "react";
import CustomButton from "./button";

type Props = {
  onSearch: (value: string) => void;
  defaultValue: string;
};

export default function SearchInput({ onSearch, defaultValue }: Props) {
  const [searchValue, setSearchValue] = useState(defaultValue);

  return (
    <div className="relative w-full max-w-[600px] ">
      <div
        className="absolute right-2 top-1 transform h-fit rounded-full"
        onClick={() => onSearch(searchValue)}
      >
        <CustomButton icon="search" radius="full" type="button" className="hover:bg-title duration-300"/>
      </div>
      <input
        type="search"
        name="search"
        className="w-full py-3 pl-6 pr-14 border border-border rounded-full outline-none"
        placeholder="Pronađite svoju omiljenu destinaciju"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        autoComplete="off"
      />
    </div>
  );
}
