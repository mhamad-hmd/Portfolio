import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer";

export default function WelcomePage() {
    const welcomePage = useRef<HTMLDivElement>(null)
    const [welcome, setWelcome] = useState(true)
    const { ref: displayRef, inView: myElementIsVisible } = useInView();


    useEffect(() => {
        setTimeout(() => setWelcome(false), 2000)
    }, [])

    return (
        <div ref={welcomePage} className={`welcomePageContainer h-full w-full absolute top-0 flex
         justify-center items-center bg-scndryColor z-50 transition-all duration-1000 ease-in-out ${welcome? "visible opacity-100" : "invisible opacity-0"}`}>
            <h1 ref={displayRef} className="mainFOnt mainColor text-2xl md:text-4xl"><span className={`delay-500 transition-all duration-500 ease-in-out mainFOnt mainColor ${myElementIsVisible? "opacity-100" : "opacity-0"}`}>Mohamad Hammoud</span> <span className={`delay-1000 transition-all duration-500 ease-in-out mainFOnt mainColor ${myElementIsVisible? "opacity-100" : "opacity-0"}`}>Portfolio</span></h1>
        </div>
    )
}