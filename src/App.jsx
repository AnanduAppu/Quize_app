import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Assemble from "./pages/Mainpages/Assemble";
import Clintcontex from "../Clentcontex/Clientcontex";
import IntroPage from "./pages/IntroPage";
import quiz from "./pages/Quiz_Data/Question";
import CountingPage from "./pages/CountingPage";
import EndPage from "./pages/EndPage";


function App() {

  const initialWidth = 100; // progress bar width
  const [loading, setLoading] = useState(true);
  const [quizData,setQuizData] = useState(quiz)// all quiz data
  const [isRunning, setIsRunning] = useState(true);// progress bar above navbar here to controll
  const [width, setWidth] = useState(initialWidth);// progress bar width controller
  const [hidePogress, setHidePogress] = useState(false);
  const [medalScore,setMedalScore]=useState(null)
  const [coinScore,setCoinScore]=useState(0)

  const [Streak1,setStreak1]=useState(false)
  const [Streak2,setStreak2]=useState(false)

  const [Streak3,setStreak3]=useState(false)
  const [Streak4,setStreak4]=useState(false)
  const [StreakCount,setStreakCount]=useState(0)
  const [questionNumber,setQuestionNumber]=useState(1)

  const data = {
    loading, setLoading,
    quizData,setQuizData,
    isRunning, setIsRunning,
    width, setWidth,initialWidth ,
    hidePogress, setHidePogress,
    Streak1,setStreak1,
    Streak2,setStreak2,
    Streak3,setStreak3,
    StreakCount,setStreakCount,
    questionNumber,setQuestionNumber,
    medalScore,setMedalScore,
    coinScore,setCoinScore,
    Streak4,setStreak4
  }

  return (
    <>
      <Clintcontex.Provider value={data}>

          <Routes>
            <Route path="/" element={<IntroPage/>}/>
            <Route path="/counting" element={<CountingPage/>}/>
            <Route path="/quize" element={<Assemble />} />
            <Route path="/endpage" element={<EndPage/>}/>
          </Routes>
      
      </Clintcontex.Provider>
    </>
  );
}

export default App;
