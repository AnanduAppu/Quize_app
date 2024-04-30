import React, { useContext, useState } from "react";
import Clintcontex from "../../../Clentcontex/Clientcontex";

function Cards() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { setIsRunning, setWidth, initialWidth, quizData } =
    useContext(Clintcontex);

  const [checkans, setCheckans] = useState("");

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleRestart = () => {
    setIsRunning(true);
    setWidth(initialWidth);
  };

  return (
    <>
      <div className="flex justify-center items-center h-[28vh]">
        <h1 className="text-3xl font-bold ">Who invented light ?</h1>
      </div>

      <div className="flex justify-center items-end h-[60vh]">
        <div
          className="w-96 bg-green-500 p-4 rounded-lg shadow-lg h-96 ms-1 cursor-pointer "
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={handleRestart}
        >
          <h2 className="text-white font-bold text-end">
            <span
              className={`px-1 shadow-md shadow-green-700 ${
                hoveredCard === 1 ? "invisible" : ""
              }`}
            >
              1
            </span>
          </h2>
          <p className="text-white text-center py-36 text-2xl font-semibold">
            This is a green card.
          </p>
        </div>

        <div
          className="w-96 bg-red-500 mx-1 p-4 rounded-lg shadow-lg h-96"
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h2 className="text-white font-bold text-end">
            <span
              className={`px-1 shadow-md shadow-red-700 ${
                hoveredCard === 2 ? "invisible" : ""
              }`}
            >
              2
            </span>
          </h2>
          <p className="text-white text-center py-36 text-2xl font-semibold">
            This is a red card.
          </p>
        </div>
        <div
          className="w-96 bg-yellow-500 p-4 rounded-lg shadow-lg h-96"
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h2 className="text-white font-bold text-end">
            <span
              className={`px-1 shadow-md shadow-yellow-700 ${
                hoveredCard === 3 ? "invisible" : ""
              }`}
            >
              3
            </span>
          </h2>
          <p className="text-white text-center py-36 text-2xl font-semibold">
            This is a yellow card.
          </p>
        </div>
        <div className="w-96 bg-blue-500 mx-1 p-4 rounded-lg shadow-lg h-96"
        
        onMouseEnter={() => setHoveredCard(4)}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={handleRestart}
        >
          <h2 className="text-white font-bold text-end">
            <span className={`px-1 shadow-md shadow-blue-700 ${
                hoveredCard === 4 ? "invisible" : ""
              }`}>4</span>
          </h2>
          <p className="text-white text-center py-36 text-2xl font-semibold">
            This is a purple card.
          </p>
        </div>
      </div>
    </>
  );
}

export default Cards;
