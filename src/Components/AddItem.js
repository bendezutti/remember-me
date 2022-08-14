import { useState } from 'react'


const AddItem = ({onAdd}) => {
const [text, setText] = useState('')
const [location, setLocation] = useState('')


const onSubmit = (e) => { 
  e.preventDefault()

  if(!text) { 
    alert('Add an item!')
    return
  }

  onAdd({ text })

  setText('')
}

  return (
    <form className = 'add-form' onSubmit = {onSubmit}>
      <div className ='form-control'> 
        <label>Item</label>
        <input type='text' 
        placeholder ='Add item'
        value = {text} 
        onChange ={(e)=> setText(e.target.value)}
       />

      </div>
        <div className ='form-control'> 
        <label>Location</label>
        <input type='text' 
        placeholder ='Add location'
        value = {location} 
        onChange ={(e)=> setLocation(e.target.value)}
       />
        </div>
        
        
        <input type ='submit' value ='Save Item' 
        className = 'btn'/> 

        <input type ='submit' value ='Save Location' 
        className = 'btn'/> 
    </form> 
  )
}

export default AddItem