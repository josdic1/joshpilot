import { useRouteError } from "react-router-dom"
import NavBar from "../Components/NavBar"

function Error() {

const error = useRouteError()

return (
<>
<header>
    <NavBar />
</header>
<main>
<h1>Error!</h1>
{error.message}
{error.status}
</main>
</>
)}

export default Error
