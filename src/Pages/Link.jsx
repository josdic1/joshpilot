
function Link({ link, onClick }) {
  return (
    <tr>
      <td>
        <button type="button" data-id={link.id} name="star" onClick={onClick}>
          {link.starred ? "★" : "☆"}
        </button>
      </td>
      <td>{link.title || ""}</td>
      <td>
        <button type="button" data-id={link.id} name="view" onClick={(onClick)}>
          View
        </button>
      </td>
      <td>{link.type || ""}</td>
      <td>{link.description || ""}</td>
      <td>{link.paid ? "paid" : "free"}</td>
      <td>
        <button type="button" data-id={link.id} name="edit" onClick={onClick}>
          Edit
        </button>
      </td>
      <td>
        <button type="button" data-id={link.id} name="del" onClick={onClick}>
          Del
        </button>
      </td>
    </tr>
  );
}


export default Link
