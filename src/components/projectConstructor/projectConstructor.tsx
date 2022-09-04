
import './projectConstructor.scss'

type props = {
    title: string,
    typeOfwork: string,
    password: number,
    tools: string,
    aboutIt: string,
    imgPath: string,
    projectUrl:string,

}

export const ProjectConstructor = (props: props) => {

    const { title, typeOfwork, password, tools, aboutIt, imgPath, projectUrl } = props;

    document.getElementById('projectBtn')!.onclick = () => {
        location.href = projectUrl
    }

    return (
        <div className='projectWrapper flex justify-between '>
            <div>
                <div className='mb-2'>

                    <h1 className='projectTitle'>{title}</h1>
                    <h1>t{typeOfwork}</h1>
                    <h1>Preview Password: {password}</h1>


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
            <button id='projectBtn' className='btn btnA m-auto'>
                Preview
                </button>
        </div>

    )
}

// Since I was using shopify and it takes care of all the backend, this project ended up being pure frontend 