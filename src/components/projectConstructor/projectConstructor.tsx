
import './projectConstructor.scss'

type props = {
    title: string,
    typeOfwork: string,
    password: string,
    tools: string,
    aboutIt: string,
    imgPath: string,
    projectUrl: string,

}

export const ProjectConstructor = (props: props) => {




    const { title, typeOfwork, password, tools, aboutIt, imgPath, projectUrl } = props;


    return (
        <div className='projectWrapper  m-auto pb-3  '>
            <div className='projectInfo '>
                <div className='mb-2 flex flex-col justify-center'>

                    <div className='previewContainer py-5'>

                        <img className='previewImg' src={imgPath} alt="" />

                    </div>


                    <h1 className='projectTitle'>{title}</h1>
                    <h1>{typeOfwork}</h1>
                    {password.length > 0 &&
                        <h1>Preview Password: {password}</h1>
                    }





                    <div className='py-2'>
                        <h1>Tools Used:</h1>
                        <p>{tools}</p>
                    </div>
                    <div className='aboutIt'>
                        <h1>About It:</h1>
                        <p>{aboutIt}</p>

                    </div>

                    <a href={projectUrl} className="w-full text-center mt-5 mb-2">
                        <button id='projectBtn' className='btn btnA m-auto text-center '>

                            Preview

                        </button>
                    </a>
                </div>
            </div>






        </div>

    )
}

