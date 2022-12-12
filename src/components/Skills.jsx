import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const skills = () => {
    return (
        <section id='skills' className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Frontend Developer</h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 '>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                        <p className='py-2 mx-8 mt-2 text-[#00df9a]'>Languages I speak:</p>
                        <p className='py-1 mx-4 '>HTML, Pug, Slim, CSS, Sass, Git</p>
                        <p className='py-2 mx-8 mt-2 text-[#00df9a]'>Dev Tools:</p>
                        <p className='py-1 mx-4 '>Atom</p>
                        <p className='py-1 mx-4 '>Bitbucket</p>
                        <p className='py-1 mx-4 '>Bootstrap</p>
                        <p className='py-1 mx-4 '>Bulma</p>
                        <p className='py-1 mx-4 '>Codekit</p>
                        <p className='py-1 mx-4 '>Github</p>
                        <p className='py-1 mx-4 '>Surge</p>
                        <p className='py-1 mx-4 '>Terminal</p>
                        <p className='py-1 mx-4 '>Vercel</p>
                    </div>
                </div>

                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] ' src={Single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Frontend Developer</h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 '>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                        <p className='py-2 mx-8 mt-2 text-[#00df9a]'>Languages I speak:</p>
                        <p className='py-1 mx-4 '>HTML, Pug, Slim, CSS, Sass, Git</p>
                        <p className='py-2 mx-8 mt-2 text-[#00df9a]'>Dev Tools:</p>
                        <p className='py-1 mx-4 '>Atom</p>
                        <p className='py-1 mx-4 '>Bitbucket</p>
                        <p className='py-1 mx-4 '>Bootstrap</p>
                        <p className='py-1 mx-4 '>Bulma</p>
                        <p className='py-1 mx-4 '>Codekit</p>
                        <p className='py-1 mx-4 '>Github</p>
                        <p className='py-1 mx-4 '>Surge</p>
                        <p className='py-1 mx-4 '>Terminal</p>
                        <p className='py-1 mx-4 '>Vercel</p>
                    </div>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Frontend Developer</h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 '>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                        <p className='py-2 mx-8 mt-2 text-[#00df9a]'>Languages I speak:</p>
                        <p className='py-1 mx-4 '>HTML, Pug, Slim, CSS, Sass, Git</p>
                        <p className='py-2 mx-8 mt-2 text-[#00df9a]'>Dev Tools:</p>
                        <p className='py-1 mx-4 '>Atom</p>
                        <p className='py-1 mx-4 '>Bitbucket</p>
                        <p className='py-1 mx-4 '>Bootstrap</p>
                        <p className='py-1 mx-4 '>Bulma</p>
                        <p className='py-1 mx-4 '>Codekit</p>
                        <p className='py-1 mx-4 '>Github</p>
                        <p className='py-1 mx-4 '>Surge</p>
                        <p className='py-1 mx-4 '>Terminal</p>
                        <p className='py-1 mx-4 '>Vercel</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default skills;
