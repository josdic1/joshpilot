import { NavLink } from "react-router-dom"
import { useContext } from "react"
import LinkContext from "../Contexts/LinkContext"

function NavBar() {

    const { inEditMode } = useContext(LinkContext)

    return (
    <>
    <nav>
        <span>{inEditMode ? 'EDIT' :  'VIEW'}</span>
    <NavLink to='/' className='nav-link'>Home</NavLink>
<NavLink to='/form' className='nav-link'>Form</NavLink>

    </nav>
    </>
    )}

    export default NavBar

