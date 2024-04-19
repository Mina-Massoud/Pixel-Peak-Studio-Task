import React, { useEffect, useState } from "react";
import List from "../../Icons/List";
import Location from "../../Icons/Location";
import SearchComponent from "../common/SearchComponent";
import { Link } from "react-router-dom";

export default function Navbar({ location }) {


  return (
    <div className="justify-between  text-black card-style flex bg-[#ffffff66] py-4 px-[2em]">
      <div className="left-side-container flex items-center gap-[5em]">
        <div className="identity flex items-center gap-4">
          <List />
          <h1 className="font-bold text-[1rem] text-[#0FB3BB]">Sky Cast</h1>
        </div>

        <div className="location flex items-center gap-3">
          <Location />
          <p>
            {location?.countryName}, {location?.city}
          </p>
        </div>
      </div>
      <div className="right-side flex items-center gap-[4em]">
        <SearchComponent />
        <Link
          to={"/create-account"}
          className="bg-[#0FB3BB] text-[#000000] py-[1.1875em] px-[2.93em] font-bold rounded-[12px]"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
