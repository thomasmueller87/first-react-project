
import './App.css'
import Headline from './Headline';
import Box from './Box';
import Form from './Form';
import TodoList from './TodolList';
import Button from './Button';
import { useEffect, useState } from 'react';



function App() {
    
  //Reload der Seite nach dem Addbutton
  const [todos, setTodos] = useState([])

  //Beim erstmaligen Laden der Seite die Todos aus dem LocalStorage holen
  useEffect( function() {
    loadFromLocal('NEWSAVE')
  }, [])

    function loadFromLocal(getdata) {
      const todosFromLocal = JSON.parse(localStorage.getItem(getdata)) ?? []
      setTodos(todosFromLocal)
    }


  // Wenn die Todos sich ändern, dann im LocalStorage speichern!
  useEffect(() => {
    saveToLocal('NEWSAVE', todos)
  }, [todos])

    function saveToLocal(name, toSaveArray) {
      // localStorage.setItem(senddata, JSON.stringify(todos))
          localStorage.setItem(name, JSON.stringify(toSaveArray))
    }

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
