import React, { useState, useEffect } from "react";

const EndPage = () => {
  const [showThankYou, setShowThankYou] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowThankYou(false);
    }, 2000); // Show "Thank You" for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen text-5xl font-bold text-white bg-slate-800 "  >
      {showThankYou && (
        <div
       
          style={{
            animation: "fade-in-out 1s ease-out",
            marginBottom: "20px"
          }}
        >
         The End
        </div>
      )}
      {!showThankYou && (
        <div  style={{ animation: "fade-in-out 1s ease-out" }}> Thank You </div>
      )}
    </div>
  );
};

export default EndPage;