import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Clintcontex from "../../Clentcontex/Clientcontex";
import Image from '../assets/logo-wot-sm-updated.png'
function IntroPage() {
  const navigate = useNavigate();

  const {loading, setLoading} = useContext(Clintcontex)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      navigate("/counting");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);
  return (
    <div className="bg-black h-[100vh]">
    <div className="flex justify-center items-center h-screen">
    <div>
      <div className='w-44'>
        <img src={Image } alt="quize logo" />
      </div>
      
      <div className="block px-14">
          <img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon" />
        </div>
      
    </div>
    </div>
    </div>
  );
}

export default IntroPage;
