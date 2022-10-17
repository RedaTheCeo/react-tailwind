import React from 'react';
import Laptop from '../assets/laptop.jpg';
import aboutme from '../assets/about-me.svg';


const Analytics = () => {
  return (
    <div className='analytics w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[400px] mx-auto my-4' src={aboutme} alt='/' />
        <div className='flex flex-col justify-center'>
          {/* <p className='text-[#00df9a] font-bold '>About Me</p> */}
          {/* <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Hi, I’m Reda. Nice to meet you.</h1>
          <p className='mt-2 '>
            Since beginning my journey as a freelance designer over 11 years ago, I've done remote work for agencies, consulted for startups,
            and collaborated with talented people to create digital products for both business and consumer use.
            I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button> */}

          <div className="min-w-screen flex items-center justify-center px-5 py-5">
            <div className="rounded-lg w-full shadow-xl bg-gray-900 text-white">
              <div className="border-b border-gray-800 px-8 py-3">
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div><div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div><div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
              </div>
              <div className="px-8 py-6">
                <p><em className="text-blue-400">const</em> <span className="text-green-400">aboutMe</span> <span className="text-pink-500">=</span> <em className="text-blue-400">function</em>() {'{'}</p>
                <p>&nbsp;&nbsp;<span className="text-pink-500">return</span> {'{'}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;name: <span className="text-yellow-300">'Scott Windon'</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;position: <span className="text-yellow-300">'fullstack-developer'</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;website: <span className="text-yellow-300">'<a href="https://scottwindon.com" target="_blank" className="text-yellow-300 hover:underline focus:border-none">https://scottwindon.com</a>'</span>,</p>
                <p>&nbsp;&nbsp;{'}'}</p>
                <p>{'}'}</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};


export default Analytics;
