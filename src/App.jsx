import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Assemble from "./pages/Mainpages/Assemble";
import Clintcontex from "../Clentcontex/Clientcontex";
import IntroPage from "./pages/IntroPage";
import quiz from "./pages/Quiz/Question";

function App() {

  const initialWidth = 100; // progress bar width
  const [loading, setLoading] = useState(true);
  const [quizData,setQuizData] = useState(quiz)// all quiz data
  const [isRunning, setIsRunning] = useState(true);// progress bar above navbar here to controll
  const [width, setWidth] = useState(initialWidth);// progress bar width controller
  const [hidePogress, setHidePogress] = useState(false);

  const data = {
    loading, setLoading,
    quizData,setQuizData,
    isRunning, setIsRunning,
    width, setWidth,initialWidth ,
    hidePogress, setHidePogress
  }

  return (
    <>
      <Clintcontex.Provider value={data}>

          <Routes>
            <Route path="/" element={<IntroPage/>}/>
            <Route path="/quize" element={<Assemble />} />
          </Routes>
      
      </Clintcontex.Provider>
    </>
  );
}

export default App;
