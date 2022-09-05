
import './contactMe.scss';


export const ContactMe = () => {
    console.log('Contact Me')

    return (
        <div className='contactWrapper'>

            <div>
                <h1 className='sectionTitle'>Contact ME</h1>
            </div>

            <div>
                <form action="https://formsubmit.co/ce508cfc734643d8a6f4809a254afebc" method="POST" className='grid '>
                   
                   {/* Honeypot */}
                   <input className='hidden' type="text" name='_honey'  />
                   
                    {/* disable captcha */}
                    <input type="hidden" name='_captcha' value='false' />

                    {/* check if successfull */}
                    <input type="hidden" name="_next" value="http://127.0.0.1:5173/success"></input>

                    <div className='flex justify-between '>
                        <input className='formInput miniInput md:m-0 sm:mx-1.5' type="text" name='Name' placeholder='Name' />
                        <input className='formInput miniInput md:m-0 sm:mx-1.5' type="text" name="Last&nbsp;Name" placeholder='LastName' />
                    </div>
                    <div className='flex justify-evenly'>
                        <input className='formInput miniInput' name='Email' type="Email" placeholder='Email ' />
                        <input className=' formInput miniInput' type="text" name='Phone' placeholder='PhoneNumber' />
                    </div>
                    <div className='flex justify-center'>
                        <textarea className=' formInput aboutInput break-words' name="About" id="" placeholder='About' />
                    </div>
                    <div className='flex my-2'>
                        <button className='btn btnA m-auto' type='submit'>Submit</button>
                    </div>
                </form>
            </div>

        </div>

    )

}

