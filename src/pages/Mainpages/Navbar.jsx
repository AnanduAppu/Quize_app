import React from "react";
import { useContext } from "react";
import Clintcontex from "../../../Clentcontex/Clientcontex";
import MedalImg from "../../assets/medal.png";
import CoinImg from "../../assets/coin.png";
import CapImg from "../../assets/capture.png";

function Navbar() {
  const {
    Streak1,
    Streak2,
    Streak3,
    Streak4,
    StreakCount,
    questionNumber,
    medalScore,
    coinScore
  } = useContext(Clintcontex);
  return (
    <nav className="flex justify-between p-1 text-white">
      <div className="flex gap-2 p-1">
        <div>
          <button className="py-1 px-2 bg-slate-500 rounded-md border border-gray-100">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width=""
              viewBox="0 0 448 512"
              class="text-slate-200 hover:scale-125 h-6 w-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path>
            </svg>
          </button>
        </div>
        <div> 
          <button className={`py-1 px-2 ${ Streak4 ?`bg-orange-500 duration-700` :`bg-gray-500`}  rounded-md border border-gray-100`}>
            {questionNumber}/4
          </button>
        </div>

        <ul className={`rounded-md border  shadow-sm  ${ Streak4 ?`border-blue-500`:`border-white`} text-white w-[100%] flex  `}>
          <li
            className={`flex justify-between w-24 rounded-l-md ${
              Streak1 && "bg-orange-600  duration-700" 
            }  ps-1 items-center`}
          >
            <div>Streak</div>
            <div>l</div>
          </li>
          <li className={`${Streak2 && "bg-orange-600 duration-700"} w-20`}></li>
          <li
            className={`flex justify-between w-24 rounded-r-md ${
              Streak3 && "bg-orange-600 duration-700"
            }  px-1  items-center`}
          >
            <div>l</div>
            <div>{StreakCount}</div>
          </li>
        </ul>
      </div>

      <div className="flex gap-1 p-1">
        <div className="flex">
          <button className="py-1 px-2 bg-slate-500 rounded-l-md w-20 h-8 border border-gray-100 flex ">
             
            <span>
           <img src={MedalImg }className="w-6 my-1" alt="" />
           
            </span>
            { medalScore?<span className="text-lg mx-3">{medalScore}</span>:<span className="text-lg mx-3">-</span>}
            <span>
             
            </span>
            
          </button>
          <button className="py-1 px-2 bg-slate-500 rounded-r-md w-20 border h-8 border-gray-100 flex">
            <img src={CoinImg} alt="" className=" w-6 h-6" />
            <span className="text-lg mx-3">{ coinScore}</span>
          </button>
        </div>
        <div>
          <button className="py-1 px-2 bg-slate-500 rounded-r-md w-10 border h-8 border-gray-100">
            <img src={CapImg} alt="" className="w-6 h-6" />
           
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
