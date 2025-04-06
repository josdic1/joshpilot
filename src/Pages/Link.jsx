import { useParams } from "react-router-dom"

function Link({link}) {

    const { id } = useParams()

return (
<>
<tr>
        <td>
          <button type="button" data-id={link.id}>
            {link.starred ? "★" : "☆"}
          </button>
        </td>
        
        <td>{link.title || ''}</td>
  
        <td>
          <button type="button" data-id={link.id} data-name="view" onClick={onClick}>
            View
          </button>
        </td>
  
        <td>{link.type || ''}</td>
        <td>{link.description || ''}</td>
        <td>{link.paid ? "paid" : "free"}</td>
  
        <td>
          <button type="button" data-id={link.id} data-name="edit" onClick={onClick}>
            Edit
          </button>
        </td>
  
        <td>
          <button type="button" data-id={link.id} data-name="del" onClick={onClick}>
            Del
          </button>
        </td>
      </tr>
</>
)}

export default Link
