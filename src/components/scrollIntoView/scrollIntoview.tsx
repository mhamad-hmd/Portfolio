import { useEffect } from "react"



export const scrollIntoView = (domBtn:string, eventFunc:any) => {


    useEffect (() => { 
        // run this function from an event handler or an effect to execute scroll
        const currentBtn = document.getElementById(domBtn)

        if(currentBtn){
    
            currentBtn!.addEventListener('click', eventFunc)
        }
      })
    

}

