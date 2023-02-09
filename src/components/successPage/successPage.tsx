
import './successPage.scss'

export const SuccessPage = () => {
    return (
        <div className='my-8'>
            <div className='grid gap-4 md:gap-8 lg:gap-12 justify-center mainFont font-bold'>

                <h1 className="sectionTitle text-5xl md:text-6xl scndryColor text-center">Success!!</h1>
                <p className="text-2xl lg:text-4xl  scndryColor">I will reach out to you very soon</p>
                <a className='m-auto' href="/">
                    <button className='btn px-4 py-2 fontMain  rounded text-xl md:text-2xl m-auto' >
                         <span>Go Back?</span>
                    </button>
                </a>
            </div>
        </div>
    )
}

