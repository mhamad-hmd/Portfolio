
import './successPage.scss'

export const SuccessPage = () => {
    console.log('success')
    return (
        <div>
            <div className='grid justify-center'>

                <h1 className="sectionTitle">Success!!</h1>
                <p className="successP">I will reach out to you very soon</p>
                <a className='m-auto' href="/">
                    <button className='btn btnB w-fit m-auto mt-5' >Go Back?</button>
                </a>
            </div>
        </div>
    )
}

