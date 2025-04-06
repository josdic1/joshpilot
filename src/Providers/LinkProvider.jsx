import { useState, useEffect, useContext, useReducer } from "react"
import LinkContext from "../Contexts/LinkContext"


function LinkProvider({children}) {

const [links, setLinks] = useState([])

useEffect(() => {
    fetchLinks()
},[])

async function fetchLinks() {
    try {
        const r = await fetch(`http://localhost:3000/links`)
        if(!r.ok) {
            throw new Error("💥 Error");
        }
        const data = await r.json()
        setLinks(data)
    }catch (error) {console.error("❌ Caught error:", error);}
}

return (
<>
<LinkContext.Provider value={{
    links
}} >
{children}
</LinkContext.Provider>
</>
)}

export default LinkProvider
