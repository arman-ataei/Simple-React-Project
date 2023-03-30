// import { Container, Row, Col } from 'react-bootstrap';
import React from 'react'
import Item from './components/Item'
import './App.css'
function App() {
  const [lastItem, setLastItem] = React.useState("")
  const [itemLst, setItemLst] = React.useState(["Tomato"])
    function handleSubmit(event){
      event.preventDefault()
      // console.log(itemLst)
    }
    const itemElements = itemLst.map((item,idx)=><Item id={idx} removeItem={removeItem} key={idx} item={item} />)
   
    console.log("app update")
    function addItem(){
      if(lastItem){
        setItemLst(prevLst=>[...prevLst, lastItem]);
        setLastItem("")
      }else{
        setLastItem("")
      }          
    }
    function updateLastItem(event){
      setLastItem(event.target.value)
      console.log("update last item")
    }
    function removeItem(event){
        // console.log(event.target.id)
        setItemLst((prevElements)=>{
          const newItemElements = []
          for(let i = 0; i< prevElements.length; i++){
            if( i==event.target.id){
              continue;
            }else{
              newItemElements.push(prevElements[i] )  
            } 
          }
          return newItemElements
        })
          console.log(itemLst)
    }
    console.log(itemLst)
    return (
   <div className='bg-warning min-vw-100 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
              <h1 className='mb-5'>Shoping List</h1>
            <div className='d-flex flex-column justify-content-center'>
              <form onSubmit={handleSubmit} className='d-flex flex-column flex-sm-row justify-content-center' action="">
                    <input onChange={updateLastItem} placeholder="Enter your Item" className='form-control my-sm-0 mx-sm-1 p-3 my-3' value={lastItem} type="text" name="Item" />
                    <button onClick={addItem} className='btn btn-outline-primary add-item ms-sm-0 ms-0 p-sm-0'>Add New Item</button>
              </form>
              <div>
                <ul className='d-flex flex-column full-width p-0'>
                  {itemElements}
                </ul>
              </div>          
            </div>
   </div>
      
  )
}

export default App
