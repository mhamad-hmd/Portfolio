
import { useEffect, useRef } from 'react';
import { scrollIntoView } from '../scrollIntoView/scrollIntoview';
import './aboutMe.scss'

export const AboutMe = () => {

    
    const myRef = useRef<null | HTMLDivElement>(null)

    const handleClick = () => {
        myRef.current?.scrollIntoView({behavior: 'smooth'});
      };    
    
      const aboutMeBtn = 'aboutMe'

      scrollIntoView(aboutMeBtn, handleClick)
    
    

    return (

        <div className="aboutMeWrapper  section">
            <div className="aboutMe ">

                <div ref={myRef}>
                    <h1 className="sectionTitle">About me</h1>
                </div>

                <div  className="myInfoWrapper grid justify-center items-center">

                    <div className="myInfo max-w-6xl">
                        <p className="break-words">Born in 2002,
                            started learning web development by taking a full stack <a className='hyperText' href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/">course</a>   on Udemy,
                            always trying to grow my knowledge as much as possible and to stay up to date with the industry.
                            I'm very good in working with teams, love to ask alot of questions to wrap my head around the code as much as possible,
                            and probably one of the most dedicated and disciplined guy you'll meet  </p>
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



