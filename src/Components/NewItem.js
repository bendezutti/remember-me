import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const NewItem = ({ item, onDelete }) => {
  return (
    <div className = 'item'> 
    <h3>
    {item.itemName}{' '}
    <FontAwesomeIcon icon = {faXmark} onClick ={() => onDelete(item.id)}>  </FontAwesomeIcon>
    
    </h3> 
   
    </div>
  )
}
export default NewItem