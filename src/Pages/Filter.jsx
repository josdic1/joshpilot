import { useState } from "react"

function Filter({ onFilter }) {

    const [filterValue, setFilterValue] = useState({
        textFilter: '',
        selectFilter: ''
    })

    const onFilterChange = (e) => {
        const { name, value } = e.target
      const updated = {
        ...filterValue,
        [name]: value
      }
      setFilterValue(updated);
         onFilter(updated)
    }

return (
<>
<label htmlFor="textFilter">Text: </label>
<input type='text' name='textFilter' onInput={onFilterChange} value={filterValue.textFilter} placeholder="Type something..." />
<label htmlFor="selectFilter">Type: </label>
<select name="selectFilter" onChange={onFilterChange} value={filterValue.selectFilter} >
        <option value="" default unselectable="">Type...</option>
    <option value='ai'> AI </option>
    <option value='code'> Code </option>
    <option value='music'> Music </option>
    <option value='settings'> Settings </option>
    <option value='social'> Social </option>
    </select>
</>
)}

export default Filter
