import React from 'react'

export default function Card({userName, btnText="visit me"}){ // instead we can use "props" as original code, and can access the  object using "props.userName";

  console.log(userName);
  // console.log(Obj);
  
  
  
  return (
    <>
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black mt-4">
    <img
      src="https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Image"
      className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
    />
    <div className="mt-6 mb-2">
      <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
        {userName}
      </span>
      <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
    </div>
    <p className="text-gray-300">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
      amet
    </p>
    <button>{btnText}</button>
  </div>
  </>
  )
}
