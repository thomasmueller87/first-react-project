
import './App.css'
import Headline from './Headline';
import Box from './Box';
import Button from './Button';
import Todo from './Todo';
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


// todos.map --> todos kommt vom useState
  const todoList = todos.map((todo, _index) => (
    <Todo key={_index} title={todo.title} color={todo.color} />))

    function addTodo(event) {
      event.preventDefault(); // Verhindert Absenden des Formulars = neuladen der Seite
      
      //Eventwurde im Formular ausgelöst, event.targ
      const form = event.target;
      const inputField = form.todo
      const inputValue = inputField.value
      
      const newTodo = {
        title: inputValue, color: 'gray'
      }
      const newTodos = [newTodo, ...todos] // Erstelle neuen Array
      setTodos(newTodos)                   //Trigger für neu rendern, mit dem neuen Array
    }

 
  return (<div className="App">
    <Headline color="red" name="This is a classic todo List!" />
    
      <form onSubmit={addTodo}>
        <input type="text" name="todo" placeholder="Add a todo..." />
        <Button text="Submit" />
        </form>

      <ul>
  {todoList}
      </ul>

    <Box backcolor="red" text="Dies ist eine rote Testbox" />

    <Button text="Drück mich!" />
    <Button isLarge text="Ich bin der große Button!" />
  </div>)

}

export default App
