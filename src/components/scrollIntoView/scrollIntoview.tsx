import { useEffect } from "react"



export const scrollIntoView = (section:any, button:string) => {

    const handleClick = () => {
        setTimeout(() => {
            section!.scrollIntoView({ behavior: 'smooth' });
        }, 1000)
    };


    useEffect (() => { 
        // run this function from an event handler or an effect to execute scroll
        const currentBtn = document.getElementById(button)

        if(currentBtn){
            currentBtn!.addEventListener('click', handleClick)
        }
      })
    

}

