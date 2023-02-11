import './Header.scss'

export default function Header({display, changeDisplay, dark}:any) {

    
    return (
        <div className="headerContainer p-4 transition-all ">
            <div className="headerWrapper flex flex-col items-center  md:items-start gap-4  md:gap-6">
                <div className="heading flex flex-col w-fit font-bold ">
                    <h1 className={`title text-4xl whitespace-nowrap md:text-5xl sm:text-4xl ${dark? "text-mainColor" : "text-scndryColor"}  `}>Mohamad Hammoud</h1>
                    <span className={`role text-lg text-center ${dark? "text-mainColor" : "text-scndryColor"} `}>Developer & Designer</span>
                </div>
                <div className="headerMenus flex justify-center w-full ">
                    <ul className="flex gap-4 lg:gap-12 md:gap-8 font-bold">
                        <li className={`text-xl lg:text-4xl md:text-2xl mainFont ${dark? "text-mainColor" : "text-scndryColor"}  cursor-pointer border-b transition-all border-scndryColor ${display === "Home"? 'border-b-1  ':'border-b-0'}`}  onClick={() => changeDisplay("Home")}>Home</li>
                        <li className={`text-xl lg:text-4xl md:text-2xl mainFont ${dark? "text-mainColor" : "text-scndryColor"}  cursor-pointer border-b transition-all border-scndryColor ${display === "Projects"? 'border-b-1  ':'border-b-0'}`}  onClick={() => changeDisplay("Projects")}>Projects</li>
                        <li className={`text-xl lg:text-4xl md:text-2xl mainFont ${dark? "text-mainColor" : "text-scndryColor"}  cursor-pointer border-b transition-all border-scndryColor ${display === "Info"? 'border-b-1  ':'border-b-0'}`}  onClick={() => changeDisplay("Info")}>Info</li>
                        <li className={`text-xl lg:text-4xl md:text-2xl mainFont ${dark? "text-mainColor" : "text-scndryColor"}  cursor-pointer border-b transition-all border-scndryColor ${display === "Contact"? 'border-b-1  ':'border-b-0'}`}  onClick={() => changeDisplay("Contact")}>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )   
}