export default function Display ({children}:{children:any}) {
    return(
        <div className="displayContainer relative flex justify-center overflow-hidden h-full">
            {children}
        </div>
    )
}