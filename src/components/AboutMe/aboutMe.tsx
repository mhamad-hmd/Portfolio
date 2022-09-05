
import './aboutMe.scss'

export const AboutMe = () => {


    return (

        <div className="aboutMeWrapper py-60">
            <div className="aboutMe ">

                <div>
                    <h1 className="sectionTitle">About me</h1>
                </div>

                <div className="myInfoWrapper grid justify-center items-center">

                    <div className="myInfo">
                        <p className="break-words">Born in 2002,
                            started learning web developing by taking a full stack course on Udemy,
                            always trying to grow my knowledge as much as possible and to stay up to date with the industry.
                            I'm very good in working with teams, love to ask alot of questions to wrap my head around the code as much as possible,
                            and probably one of the most dedicated and desciplened guy youll meet  </p>
                    </div>

                    <div className='py-4'>

                        <h1 className='skillTitle'>Skills :</h1>

                        <p>React.ts/ typescript/ node.js/ shopify/ webpack/ vite/ tailwindcss/ scss/ express/ postgresql/ cors/ knex</p>

                    </div>
                    

                </div>

            </div>

        </div>

    )
}



