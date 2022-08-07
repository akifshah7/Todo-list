import { useState } from 'react';
import './App.css';
import Heeading from './components/Heeading';
import InputField from './components/InputField';
import ToDoList from './components/ToDoList';

function App() {
  
  const [addItems, setAddItems] = useState(""); //useState is nothing but a hook that allows you
  // to have state variables in functional components.
  const [items, setItems] = useState([]);

  const deleteItem = (id) => {
    console.log('delete');
    setItems((oldItems) => {
      return oldItems.filter((arrElm, index) => { // callback function
        return id !== index; 
      })
    })
}

  const itemEvent = (event) => {
    setAddItems(event.target.value);
  }
  
// In order to show multiple elements in the list we have to make an array. In that array we have to 
// store and call the data simultaneously.
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, addItems]; //The puropse of spread operator is to expand an array, 
      // or an object literal.
    });
    setAddItems(""); // This is what the input field will show after the user adds something to the list.
  };

  return (
    <>
     <div className='main-div'>
       <div className='center-div'>
        <br/>     {/* Line Break*/}
        <Heeading />
        <br/> 
         <InputField onChange={itemEvent} value={addItems}   /> 
         <button onClick={listOfItems}> + </button> 
         <ol>
           {/* <li>{addItems}</li> */}
         {items.map((itemVal, index)=> {
          
          return <ToDoList text={itemVal} id={index} key={index} onSelect={deleteItem} />
          // What's the difference b/w a key and an id ?
        
        })}
         </ol>
        </div>       
     </div>
    </>
  );
}

export default App;



