
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
        <div className='projectWrapper  m-auto my-4 '>
            <div className='projectInfo flex justify-between '>
                <div className='mx-12'>
                    <div className='mb-2 '>

                        <h1 className='projectTitle'>{title}</h1>
                        <h1>{typeOfwork}</h1>
                        {password.length > 0 &&
                            <h1>Preview Password: {password}</h1>
                        }



                    </div>
                    <div className='py-2'>
                        <h1>Tools Used:</h1>
                        <p>{tools}</p>
                    </div>
                    <div>
                        <h1>About It:</h1>
                        <p>{aboutIt}</p>

                    </div>
                </div>

                <div className='previewContainer'>

                    <img className='previewImg' src={imgPath} alt="" />

                </div>

            </div>


            <div className='text-center'>
                <a href={projectUrl}>
                    <button id='projectBtn' className='btn btnA m-auto '>

                        Preview

                    </button>
                </a>
            </div>


        </div>

    )
}

