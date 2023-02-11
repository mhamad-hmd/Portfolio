
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { myParallax } from '../myParallax/myParallax';
import { scrollIntoView } from '../scrollIntoView/scrollIntoview';
import './contactMe.scss';


export default function ContactMe({ className, dark }: { className: string, dark:boolean }) {


    const myRef = useRef<null | HTMLDivElement>(null)
    const contactMeRef = useRef<null | HTMLDivElement>(null)
    const [btnScale, setBtnScale] = useState(0)



    const contactMeBtn = 'contactMe'



    return (
        <div ref={contactMeRef} className={`contactWrapper   absolute top-0 transition-all duration-500 ease-in-out ${className}`}>
            <div className={` contactSlide w-full`} >

                <form action="https://formsubmit.co/ce508cfc734643d8a6f4809a254afebc" method="POST" className=' gap-12 w-full flex flex-col gap-4 md:gap-8 lg:gap-12  m-auto '>

                    {/* Honeypot */}
                    <input className='hidden' type="text" name='_honey' />

                    {/* disable captcha */}
                    <input type="hidden" name='_captcha' value='false' />

                    {/* check if successfull */}
                    <input type="hidden" name="_next" value="https://mhmd-portfolio.herokuapp.com/success"></input>
                    <div className="formInputContainer gap-6 /  flex flex-col / w-full ">

                        <div className={`inputWrapper scndryFont font-bold ${dark? "text-scndryLightColor" : "text-scndryColor"}`}>
                            <label className='inputLabel font-bold' htmlFor="name">Name</label>
                            <input id='name' className='formInput w-72 md:w-[500px] font-medium px-1' type="text" name='Name' />
                        </div>


                        <div className={`inputWrapper scndryFont font-bold ${dark? "text-scndryLightColor" : "text-scndryColor"}`}>
                            <label className='inputLabel font-bold' htmlFor="email">Email</label>
                            <input id='email' className='formInput w-72 md:w-[500px] font-medium px-1' name='Email' type="Email" />
                        </div>

                        <div className={`inputWrapper scndryFont font-bold  ${dark? "text-scndryLightColor" : "text-scndryColor"}`}>
                            <label className='inputLabel font-bold' htmlFor="about">Message</label>
                            <textarea id='about font-medium' className='formInput w-72 md:w-[500px] font-medium  px-1' name="About" />
                        </div>
                    </div>
                    <div className='flex my-2'>
                        <button className='btn px-4 py-2 fontMain  rounded text-xl md:text-2xl m-auto' type='submit'>
                            <span className={`mainFont font-bold ${dark? "text-dark " : "text-mainColor"}`}>Submit</span>
                        </button>
                    </div>
                </form>
            </div>

        </div>

    )

}

