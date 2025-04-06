import { useContext } from "react"
import LinkContext from "../Contexts/LinkContext";
import Link from "./Link";

function List() {

    const { links } = useContext(LinkContext);

    const listData = links.map(link => (
        <Link key={link.id} link={link} />
    ))

return (
<>
<div>
      <table>
        <thead>
          <tr>
            <th>★</th>
            <th>Title</th>
            <th>View</th>
            <th>Type</th>
            <th>Description</th>
            <th>$</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {}
        </tbody>
      </table>
    </div>
</>
)}

export default List
