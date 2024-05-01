import React, { useState } from "react";
import HadisList from "./book&chapter/HadisList";
import ContentDetails from "../details-read/index"
import { IoIosClose,IoIosMenu } from "react-icons/io";
import Settings from "../navbar/Settings";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-5">
      <div className="grid md:grid-cols-12 gap-5">
        {/* books and capter list start  */}
        <div className="col-span-12 md:col-span-3">
          {/* Sidebar for large screens */}
          <div className="hidden md:block">
            <HadisList />
          </div>

          {/* Open button for small screens */}
          <div onClick={toggleMenu} className="bg-white p-3 block md:hidden rounded-md cursor-pointer">
            <div className="flex gap-4 items-center">
                <IoIosMenu size={30}/>
                <h1 className="noto-sans-bengali">সহিহ বুখারী</h1>
            </div>
          </div>
        </div>
        {/* books and capter list end  */}


        {/* contents details start*/}
        <div className="col-span-12 md:col-span-9">
          <ContentDetails/>
        </div>
        {/* contents details end*/}

        {/* contents settings start*/}
          {/* <div className="col-span-0 md:col-span-0 md:hidden">
          <Settings/>
        </div> */}
        {/* contents settings end*/}
      </div>

      {/* Overlay and Menu for small screens */}
      <div
        className={`fixed inset-0 z-50 bg-slate-200 opacity-100 transition-opacity ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`bg-white w-full md:w-64 h-screen/2 absolute top-0 transition-transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-between items-center p-4">
          <h1 className="noto-sans-bengali text-xl">ক্যাটাগরি</h1>
              <button onClick={toggleMenu}><IoIosClose size={30}/></button>
          </div>
          <HadisList />
        </div>
      </div>
    </div>
  );
};

export default Index;
