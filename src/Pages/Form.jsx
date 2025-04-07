import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import LinkContext from "../Contexts/LinkContext"

function Form () {

    const { handleAddNew, handleUpdate, inEditMode, selectedLink } = useContext(LinkContext)

    const [ formData, setFormData ] = useState({
        title: '',
        url: '',
        type: '',
        description: '',
        paid: false,
    })

    useEffect(() => {
        if(inEditMode) {
            setFormData({
                title: selectedLink.title || '',
                url: selectedLink.url || '',
                type: selectedLink.type || '',
                description: selectedLink.description || '',
                paid: !!selectedLink.paid
            })
        }
    },[selectedLink])

  const navigate = useNavigate()

    const onFormChange = (e) => {
        const {name, value, type, checked} = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }


    const onSubmit = (e) => {
        e.preventDefault()
        let objToSend;
        if(!inEditMode) {
            objToSend = formData
        handleAddNew(objToSend)
        } else {
            objToSend = {...formData, id: selectedLink.id}
            handleUpdate(objToSend)
        }
        clearForm()
        navigate('/')
    }

    const clearForm = () => {
        setFormData({
            title: '',
            url: '',
            type: '',
            description: '',
            paid: false,
            starred: false
        })
    }


return (
<>
<form onSubmit={onSubmit}>
    <label htmlFor="title"></label>
    <input type='text' name='title' placeholder='Title...' value={formData.title} onInput={onFormChange} /><br></br>
    <label htmlFor="url"></label>
    <input type='url' name='url' placeholder='Url...' value={formData.url} onInput={onFormChange} /><br></br>
    <label htmlFor="type"></label>
    <select name="type" onChange={onFormChange} value={formData.type} >
        <option value="" default unselectable="">Type...</option>
    <option value='ai'> AI </option>
    <option value='code'> Code </option>
    <option value='music'> Music </option>
    <option value='settings'> Settings </option>
    <option value='social'> Social </option>
    </select><br></br>
    <label htmlFor="description"></label>
    <textarea name="description" placeholder='Description...' value={formData.description} onChange={onFormChange}></textarea><br></br>
    <label htmlFor="paid">Paid ?</label>
    <input type='checkbox' name='paid' checked={formData.paid} onChange={onFormChange} />
    <button type='submit'>Submit</button>
</form>
</>
)}

export default Form
