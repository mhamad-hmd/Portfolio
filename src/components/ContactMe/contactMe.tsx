
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { myParallax } from '../myParallax/myParallax';
import { scrollIntoView } from '../scrollIntoView/scrollIntoview';
import './contactMe.scss';


export const ContactMe = () => {

    const { ref: displayRef, inView: myElementIsVisible } = useInView();

    const myRef = useRef<null | HTMLDivElement>(null)
    const contactMeRef = useRef<null | HTMLDivElement>(null)


   

    const contactMeBtn = 'contactMe'

    scrollIntoView(myRef.current, contactMeBtn)
    // myParallax(contactMeRef, 0.3, true)

    return (
        <div ref={contactMeRef}   className='contactWrapper section'>
            <div ref={displayRef} className={`${myElementIsVisible ? 'viewContact' : 'closeContact'}  contactSlide`} >

                    <h1 ref={myRef} className='sectionTitle mb-8'>Contact Me</h1>

                <form action="https://formsubmit.co/ce508cfc734643d8a6f4809a254afebc" method="POST" className='grid gap-12 w-full max-w-6xl m-auto '>

                    {/* Honeypot */}
                    <input className='hidden' type="text" name='_honey' />

                    {/* disable captcha */}
                    <input type="hidden" name='_captcha' value='false' />

                    {/* check if successfull */}
                    <input type="hidden" name="_next" value="https://mhmd-portfolio.herokuapp.com/success"></input>
                    <div className="contactFormInput flex  flex-wrap ">
                        <div className="myInfo / flex-1 flex flex-col gap-8 items-center">
                            <h2 className='myInfoTitle'>Get In Touch</h2>
                            <div className='myInfoAbout grid gap-4'>
                                <p>Beirut - Lebanon</p>
                                <p>mhamad.hmd20@gmail.com</p>
                                <p>(+961) 78 846 204</p>
                            </div>
                        </div>
                        <div className="formInputContainer gap-6 / flex-1 flex flex-col justify-end / w-full">

                            <div className="inputWrapper">
                                <label className='inputLabel' htmlFor="name">Name</label>
                                <input id='name' className='formInput miniInput md:m-0 sm:mx-1.5' type="text" name='Name' />
                            </div>
                            
                            <div className="inputWrapper">
                                <label className='inputLabel' htmlFor="lastName">Last Name</label>
                                <input id='lastName' className='formInput miniInput md:m-0 sm:mx-1.5' type="text" name="Last&nbsp;Name" />
                            </div>
                            
                            <div className="inputWrapper">
                                <label className='inputLabel' htmlFor="email">Email</label>
                                <input id='email' className='formInput miniInput' name='Email' type="Email" />
                            </div>
                            
                            <div className="inputWrapper">
                                <label className='inputLabel' htmlFor="phone">Phone</label>
                                <input id='phone' className=' formInput miniInput' type="text" name='Phone' />
                            </div>
                            
                            <div className="inputWrapper">
                                <label className='inputLabel' htmlFor="about">About</label>
                                <textarea id='about' className=' formInput aboutInput break-words' name="About" />
                            </div>
                        </div>
                    </div>
                    <div className='flex my-2'>
                        <button className='btn btnA m-auto' type='submit'><span className='mainFont'>Submit</span></button>
                    </div>
                </form>
            </div>

        </div>

    )

}

