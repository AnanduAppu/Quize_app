import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CountingPage = () => {
    const navigate = useNavigate()
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(timer);
         
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

setTimeout(() => {
    navigate('/quize')
}, 4500);

  return (
    <div className="flex justify-center items-center h-screen text-9xl font-bold text-white bg-purple-950">
      <div
      className="bg-black w-[100%] text-center"
        style={{
          animation: "fade-in-out 1s ease-out",
          opacity: count === "Go!" ? 0 : 1,
          transform: count === "Go!" ? "scale(1)" : "scale(1.1)"
        }}
      >
        {count<1?"Go!":count}
      </div>
    </div>
  );
};

export default CountingPage;
