import React, { useState } from 'react'

function Cards() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [hideTimeout, setHideTimeout] = useState(null);
  
    const handleMouseEnter = (cardNumber) => {
        clearTimeout(hideTimeout); 
        setHoveredCard(cardNumber);
    
        const timeout = setTimeout(() => {
          setHoveredCard(null);
        }, 1000); 
        setHideTimeout(timeout);
      };
    
      const handleMouseLeave = () => {
        clearTimeout(hideTimeout);
        setHoveredCard(null);
      };
  return (
    <div className="flex justify-center items-end h-[88vh]">
     <div
        className="w-64 bg-green-500 mx-1 p-4 rounded-lg shadow-lg h-64 relative"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
  <h2 className="text-white font-bold text-end">
          <span className={`px-1 shadow-md shadow-green-700 ${hoveredCard === 1 ? 'invisible' : ''}`}>1</span>
        </h2>
      <p className="text-white text-center py-16 text-2xl font-semibold">This is a green card.</p>
    </div>
    <div className="w-64 bg-red-500 mx-1 p-4 rounded-lg shadow-lg h-64">
      <h2 className="text-white font-bold text-end">
        <span className="px-1 shadow-md shadow-red-700">2</span>
      </h2>
      <p className="text-white text-center py-16 text-2xl font-semibold">This is a red card.</p>
    </div>
    <div className="w-64 bg-yellow-500 p-4 rounded-lg shadow-lg h-64">
      <h2 className="text-white font-bold text-end">
        <span className="px-1 shadow-md shadow-yellow-700">3</span>
      </h2>
      <p className="text-white text-center py-16 text-2xl font-semibold">This is a yellow card.</p>
    </div>
    <div className="w-64 bg-blue-500 mx-1 p-4 rounded-lg shadow-lg h-64">
      <h2 className="text-white font-bold text-end">
        <span className="px-1 shadow-md shadow-blue-700">3</span>
      </h2>
      <p className="text-white text-center py-16 text-2xl font-semibold">This is a purple card.</p>
    </div>
  </div>
  )
}

export default Cards