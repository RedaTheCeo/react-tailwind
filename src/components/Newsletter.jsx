import React from 'react';
import zb from "../assets/zombie.gif"
import finish from "../assets/finish.png"

const Newsletter = () => {
  return (
    <div className='newsletter w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-2 w-2/3'>
            Can you help the zombie to reach the finish line?
          </h1>
          <p>This zombie is so lost</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
        </div>
        <div className='zmn'>
          <img className='zmb' src={zb} alt="" width={130} height={130} />
        </div>
        <img className='finish' src={finish} width={130} height={130} />
      </div>
    </div>
  );
};

export default Newsletter;
