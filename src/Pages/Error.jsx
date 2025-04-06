import { useRouteError } from "react-router-dom"

function Error() {

const error = useRouteError()

return (
<>
<h1>Error!</h1>
{error.message}
{error.status}
</>
)}

export default Error
