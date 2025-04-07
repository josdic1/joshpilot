import { useState, useEffect, useReducer } from "react"
import LinkContext from "../Contexts/LinkContext"


function LinkProvider({children}) {

const [inEditMode, setInEditMode] = useState(false)  
const [links, setLinks] = useState([])
const [selectedLink, setSelectedLink] = useState({
    id: '',
    title: '',
    url: '',
    type: '',
    description: '',
    paid: false,
    starred: false,

})

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

async function handleAddNew(newLink) {
    try {
        const r = await fetch(`http://localhost:3000/links`,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newLink)
        })  
        if(!r.ok) {
            throw new Error("💥 Error");
        }
        const data = await r.json()
        const updatedList = [...links, data]
        setLinks(updatedList)
    }catch (error) {console.error("❌ Caught error:", error);}
}

async function handleDelete(id) {
    try {
        const r = await fetch(`http://localhost:3000/links/${id}`,{
            method: 'DELETE',
        })  
        if(!r.ok) {
            throw new Error("💥 Error");
        }
        const updatedList = links.filter(link => link.id !== id)
        setLinks(updatedList)
    } catch (error) {console.error("❌ Caught error:", error);}
}

async function handleUpdate(linkToUpdate) {
    try {
        const r = await fetch(`http://localhost:3000/links/${linkToUpdate.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(linkToUpdate)
        })  
        if(!r.ok) {
            throw new Error("💥 Error");
        }
        const data = await r.json()
        const updatedList = links.map(link => link.id === data.id ? data : link)
        setLinks(updatedList)
        setInEditMode(false)
    }catch (error) {console.error("❌ Caught error:", error);}
}

async function handleStar(linkToUpdate) {
    const updatedStar = {
        ...linkToUpdate,
        starred: !linkToUpdate.starred
    }
    try {
        const r = await fetch(`http://localhost:3000/links/${linkToUpdate.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(updatedStar)
        })  
        if(!r.ok) {
            throw new Error("💥 Error");
        }
        const data = await r.json()
        const updatedList = links.map(link => link.id === data.id ? data : link)
        setLinks(updatedList)
    }catch (error) {console.error("❌ Caught error:", error);}
}


return (
<>
<LinkContext.Provider value={{
    links, handleAddNew, handleDelete, handleUpdate, handleStar, setSelectedLink, selectedLink, setInEditMode, inEditMode
}} >
{children}
</LinkContext.Provider>
</>
)}

export default LinkProvider
