import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom";
import LinkContext from "../Contexts/LinkContext";
import Filter from "./Filter";

import Link from "./Link";


function List() {

    const navigate = useNavigate()

    const { links, handleDelete, handleStar, setInEditMode, setSelectedLink } = useContext(LinkContext);

    const [listToShow, setListToShow] = useState(links)

    useEffect(() => {
      setListToShow(links);
    }, [links]);

    const onClick = (e) => {
      const id = e.currentTarget.dataset.id; 
      const name = e.currentTarget.name; 
        switch(name) {
          case 'view':
            window.open(links.find(l => l.id === id).url,'_blank')
            break;
          case 'del':
            handleDelete(id)
            break;
          case 'edit':
            setSelectedLink(links.find(l => l.id === id))
            setInEditMode(true)
            navigate("/form");
            break;
          case 'star':
              handleStar(links.find(l => l.id === id))
              navigate("/list");
              break;
          default:
          break
        }
    };
    
    const listData = listToShow.map((link) => (
      <Link key={link.id} link={link} onClick={onClick} />
    ));

  function onFilter(val) {
    let filteredList = val.textFilter.trim() === ''
        ? links
        : links.filter(link => link.title.toLowerCase().includes(val.textFilter.toLowerCase()));
      if (val.selectFilter && val.selectFilter !== "all" && val.selectFilter !== "") {
        filteredList = filteredList.filter(link => link.type === val.selectFilter);
      }
     setListToShow(filteredList)
    }


return (
<>
<Filter onFilter={onFilter}/>
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
        {listData}
        </tbody>
      </table>
    </div>
</>
)}

export default List
