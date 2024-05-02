import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Clintcontex from "../../../Clentcontex/Clientcontex";

import Footer from "./Footer";
import Navbar from "./Navbar";
import QuesAnswer from "./QuesAnswer";

function Assemble() {
  const navigate = useNavigate();
  const {
    isRunning,
    width,
    setWidth,
    hidePogress,
   
  } = useContext(Clintcontex);

  useEffect(() => {
    let timer;
   
    if (isRunning && width > 0) {
      timer = setTimeout(() => {
        setWidth((prevWidth) => prevWidth - 1);
      }, 70);
    }
    return () => clearTimeout(timer);
  }, [width, isRunning]);

  

  return (
   
    <div className="h-[100vh] w-[100%] bg-gray-950">
      <div
        className={`w-full  rounded-full h-2.5 dark:bg-gray-700 py-1 ${
          hidePogress ? `hidden` : ``
        }`}
      >
        <div
          className={`h-2.5 rounded-full duration-500 ${
            width===0?navigate('/endpage'):width < 20
              ? "bg-red-800 duration-700"
              : width < 50
              ? "bg-red-500 duration-700"
              : "bg-yellow-50 duration-700"
          }`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
      <Navbar />
      <div className=" h-[83vh] bg-purple-900 rounded-2xl mx-1 ">
        <QuesAnswer />
      </div>
      <Footer />
    </div>
     
   
  );
}

export default Assemble;
