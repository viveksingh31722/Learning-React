import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/viveksingh31722')
  //   .then(res => res.json())
  //   .then(res => setData(res));
  // })
  return (
    <div className='text-center m-4 bg-gray-500 p-4 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export const githubInfoLoader = async () =>{
  const res = await fetch('https://api.github.com/users/viveksingh31722');
  return res.json();
}


