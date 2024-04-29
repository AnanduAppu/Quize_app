import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Assemble from "./pages/Mainpages/Assemble";
import Clintcontex from "../Clentcontex/Clientcontex";
import IntroPage from "./pages/IntroPage";

function App() {

  const [loading, setLoading] = useState(true);


  const data = {
    loading, setLoading
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
