import React, { useEffect, useRef } from 'react';
import { gsap, Power3 } from 'gsap'

const Contact = () => {
    const txtaRef = useRef();
    const btnRef = useRef();
    const titleRef = useRef();

    useEffect(() => {
        var tl = gsap.timeline()
            .fromTo('.inputs', {
                x: 2100,
            }, {
                x: 0,
                duration: 1,
                stagger: 0.3
            });
        var tl = gsap.timeline()
            .fromTo('.labels', {
                x: -2100,
            }, {
                x: 0,
                duration: 1,
                stagger: 0.3
            })
        gsap.fromTo(txtaRef.current, { y: 1000 }, {
            y: 0,
            duration: 1,
            delay: 1,
            ease: Power3.easeOut
        });
        gsap.fromTo(btnRef.current, { y: 1000 }, {
            y: 0,
            duration: 1,
            delay: 1.2,
            ease: Power3.easeOut
        });
        gsap.fromTo(titleRef.current, { y: -1000 }, {
            y: 0,
            duration: 1,
            ease: Power3.easeOut
        });

    }, []);
    return (
        <div className='contact max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <div className='flex justify-center flex-col'>
                <h2 className='text-white text-7xl pb-10 font-bold' ref={titleRef}>Let's Talk</h2>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="labels block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-email">
                            First Name
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="inputs bg-gray-200 appearance-none border-2 w-2/3
                             border-gray-200 rounded py-2 px-4
                             text-gray-700 leading-tight focus:outline-none
                              focus:bg-white focus:border-green-400" type="text" />
                    </div>
                    <div class="md:w-1/3">
                        <label class="labels block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-email">
                            Last Name
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="inputs bg-gray-200 appearance-none border-2 w-2/3 float-right
                             border-gray-200 rounded py-2 px-4
                             text-gray-700 leading-tight focus:outline-none
                              focus:bg-white focus:border-green-400" type="text" />
                    </div>
                </div>
                <div class="md:flex md:items-center mb-2">
                    <div class="md:w-1/3">
                        <label class="labels block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" >
                            Password
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="inputs bg-gray-200 appearance-none border-2
                             border-gray-200 rounded w-full py-2 px-4
                              text-gray-700 leading-tight focus:outline-none
                              focus:bg-white focus:border-green-400" type="email" />
                    </div>
                </div>
                <div class="mb-2">
                    <textarea className='bg-gray-200 appearance-none border-2
                             border-gray-200 rounded w-full py-2 px-4 mt-4
                              text-gray-700 leading-tight focus:outline-none
                              focus:bg-white focus:border-green-400' cols="30" rows="10" ref={txtaRef}>
                    </textarea>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-white text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3' ref={btnRef}>Submit</button>
                </div>
            </div>

        </div>
    );
}

export default Contact;
