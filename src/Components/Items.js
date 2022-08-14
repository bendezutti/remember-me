import NewItem from './NewItem'


const Items = ({items, onDelete}) => {
return (
  <> 
    {items.map((item) => (<NewItem key = {item.id} item = {item} onDelete = {onDelete}/>
    ))}
  </>
    )
}
export default Items