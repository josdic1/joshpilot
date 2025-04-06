import { useState, useEffect, useContext, useReducer } from "react"
import LinkContext from "../Contexts/LinkContext"

function LinkProvider({children}) {

return (
<>
<LinkContext.Provider value={{}} >
{children}
</LinkContext.Provider>
</>
)}

export default LinkProvider
