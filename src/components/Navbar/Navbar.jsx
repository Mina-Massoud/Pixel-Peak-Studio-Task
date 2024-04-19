import React, { useEffect, useState } from "react";
import List from "../../Icons/List";
import Location from "../../Icons/Location";
import SearchComponent from "../common/SearchComponent";
import { Link } from "react-router-dom";
import DownList from "../../Icons/DownList";
import DownArrow from "../../Icons/Arrows/popularTown/DownArrow";

export default function Navbar({ location }) {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("account"))
  );
  const [showDropDown, setShowDropDown] = useState(false);

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
        {userInfo ? (
          <div className="rounded-full">
            {userInfo?.img ? (
              <div className="flex gap-4 items-center">
                <img
                  src={userInfo.img}
                  alt="profile"
                  className="rounded-full h-[2.5em] w-[2.5em]"
                />
                <div className="flex items-center gap-4">
                  <p className="poppins font-semibold">{userInfo?.name}</p>
                  <div
                    onClick={() => {
                      setShowDropDown((prev) => !prev);
                    }}
                    className="relative"
                  >
                    <DownArrow
                      className="cursor-pointer"
                      width={15}
                      height={15}
                    />
                    {showDropDown && (
                      <ul className="absolute min-w-[200px] bg-white border rounded-lg top-[20px] right-[0] overflow-hidden ">
                        <li
                          onClick={() => {
                            localStorage.removeItem("account");
                            setUserInfo(null);
                            setShowDropDown(false);
                          }}
                          className="cursor-pointer p-2 hover:bg-red-700 hover:text-white transition duration-300"
                        >
                          Log out
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-[1em]">
                <div className="bg-green-300 p-5 rounded-full relative">
                  <p className="full-center font-semibold poppins">
                    {userInfo?.name[0]}
                  </p>
                </div>
                <div
                  onClick={() => {
                    setShowDropDown((prev) => !prev);
                  }}
                  className="relative"
                >
                  <DownArrow
                    className="cursor-pointer"
                    width={15}
                    height={15}
                  />
                  {showDropDown && (
                    <ul className="absolute min-w-[200px] bg-white border rounded-lg top-[20px] right-[0] overflow-hidden ">
                      <li
                        onClick={() => {
                          localStorage.removeItem("account");
                          setUserInfo(null);
                          setShowDropDown(false);
                        }}
                        className="cursor-pointer p-2 hover:bg-red-700 hover:text-white transition duration-300"
                      >
                        Log out
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            to={"/create-account"}
            className="bg-[#0FB3BB] text-[#000000] py-[1.1875em] px-[2.93em] font-bold rounded-[12px]"
          >
            Sign up
          </Link>
        )}
      </div>
    </div>
  );
}
