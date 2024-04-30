import React, { useContext, useEffect, useState } from "react";
import Clintcontex from "../../../Clentcontex/Clientcontex";
import CardsClone from "./Cardclone";
import Cards from "./Cards";
import Footer from "./Footer";
import Navbar from "./Navbar";


function Assemble() {

  const {  isRunning, setIsRunning, width, setWidth,initialWidth,hidePogress, setHidePogress } = useContext(Clintcontex )
  

    useEffect(() => {
      let timer;
      if (isRunning && width > 0) {
        timer = setTimeout(() => {
          setWidth((prevWidth) => prevWidth - 1);
        }, 50);
      }
  
      return () => clearTimeout(timer);
    }, [width, isRunning]); 



  return (
    <div className="h-[100vh] w-[100%] bg-gray-950">
      <div className={`w-full  rounded-full h-2.5 dark:bg-gray-700 py-1 ${hidePogress?`hidden`:``}`}>
       
        <div
          className="bg-yellow-50 h-2.5 rounded-full "
          style={{ width: `${width}%` }}
        ></div>
       
      </div>
      <Navbar/>
      <div className=" h-[86vh] bg-purple-950 rounded-2xl mx-1 ">
        <CardsClone/>
      </div>
<Footer/>
    </div>
  );
}

export default Assemble;
