import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between p-1 text-white">
    <div className="flex gap-2 p-1">
      <div>
        <button className='py-1 px-2 bg-slate-500 rounded-md border border-gray-100'>
            pa
        </button>
        
        </div>
      <div>
      <button className='py-1 px-2 bg-slate-500 rounded-md border border-gray-100'>
            1/4
        </button>
      </div>
 
      <ul className="rounded-md border border-white shadow-sm  text-white w-[100%] flex  ">
        <li className="flex justify-between w-24 rounded-l-md bg-orange-600 ps-1 items-center">
          <div>Streak</div>
          <div>l</div>
        </li>
        <li className="bg-orange-600 w-20"></li>
        <li className="flex justify-between w-32 pe-1 rounded-r-md bg-orange-600 items-center">
          <div>l</div>
          <div>0</div>
        </li>
      </ul>
    
    </div>

    <div className="flex gap-1 p-1">
    <div><button className='py-1 px-2 bg-slate-500 rounded-l-md border border-gray-100'>
            Rank
        </button>
        <button className='py-1 px-2 bg-slate-500 rounded-r-md border border-gray-100'>
            coin
        </button></div>
      <div>screenh</div>
    </div>
  </nav>
  )
}

export default Navbar