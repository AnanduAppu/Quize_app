import React, { useEffect, useState } from "react";
import Cards from "../Quiz/Cards";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Assemble() {
    const [width, setWidth] = useState(100);

    useEffect(() => {
      const timer = setTimeout(() => {
        setWidth((prevWidth) => {
          if (prevWidth > 0) {
            return prevWidth - 1;
          } else {
            return 0;
          }
        });
      }, 50);
  
      return () => clearTimeout(timer);
    }, [width]); 

  return (
    <div className="h-[100vh] w-[100%] bg-gray-950">
      <div className="w-full  rounded-full h-2.5 dark:bg-gray-700 py-1 ">
       
        <div
          className="bg-yellow-50 h-2.5 rounded-full"
          style={{ width: `${width}%` }}
        ></div>
         
      </div>
      <Navbar/>
      <div className=" h-[88vh] bg-purple-600 rounded-2xl mx-1 ">
        <Cards/>
      </div>
<Footer/>
    </div>
  );
}

export default Assemble;
