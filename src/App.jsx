
import './App.css'
import Headline from './Headline';
import Box from './Box';
import Form from './Form';
import TodoList from './TodolList';
import Button from './Button';
import { useState } from 'react';



function App() {
    const initTodos = [
    { title: 'Milch kaufen', color: 'yellow'},
    { title: 'Eier kaufen', color: 'blue'},
    { title: 'Zum Baumarkt fahren', color: 'green'},
    { title: 'Tisch reparieren', color: 'red'},
    { title: 'Wandern', color: 'red'},
  ]
  //Reload der Seite nach dem Addbutton
  const [todos, setTodos] = useState(initTodos)

  function addTodo(todo) {  
  setTodos([todo, ...todos])
}


  return (<div className="App">
    <Headline color="red" name="This is a classic todo List!" />
    
      <Form onAddTodo={addTodo}/>

      <TodoList todos={todos}/>

    <Box backcolor="red" text="Dies ist eine rote Testbox" />

    <Button text="Drück mich!" />
    <Button isLarge text="Ich bin der große Button!" />
  </div>)

}

export default App
