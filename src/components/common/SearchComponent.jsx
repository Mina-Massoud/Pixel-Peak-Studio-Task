import React from "react";
import SearchIcon from "../../Icons/SearchIcon";

export default function SearchComponent() {
  return (
    <div className="md:flex hidden items-center border-[1px] gap-2 max-w-[200px] border-[#00000033] p-2 rounded-[12px]">
      <SearchIcon />
      <input type="text" className="bg-transparent w-full outline-none" placeholder="Search Location" />
    </div>
  );
}
