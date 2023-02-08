export default function Display ({children}:{children:any}) {
    return(
        <div className="displayContainer relative flex justify-center">
            {children}
        </div>
    )
}