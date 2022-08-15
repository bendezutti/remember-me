import Header from "./Components/Header.js";
import Items from "./Components/Items.js"
import AddItem from "./Components/AddItem.js"


import{ useState } from 'react'

function App() {
  const [items, setItems] = useState( [
    {
    id: 1, 
    itemName: 'Wallet',
    itemLocation: 'Downstairs'
    }, 
   ]) 


   const addItem = (item) => { 
    const id = Math.floor(Math.random() * 1000) + 1
    
    const newItem = {id, ...item} 
    setItems([...items, newItem])
   }

   const deleteItem = (id) => { 
   setItems(items.filter((item)=> item.id !== id))
  }
   

  return (
    <div className="container">
      <Header/>
      <AddItem onAdd = {addItem}/>
      <Items items = {items} onDelete = {deleteItem}/>
    </div>
  );
}



export default App;
