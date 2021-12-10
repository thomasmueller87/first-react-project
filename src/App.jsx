
import './App.css'
import Headline from './Headline';

import Form from './Form';
import TodoList from './TodolList';

import { useEffect, useState } from 'react';
import styled from 'styled-components';



function App() {
    
  //Reload der Seite nach dem Addbutton
  const [todos, setTodos] = useState([])

  useEffect(() => {
    // 1. Hole Todos von der API
    fetch('https://jsonplaceholder.typicode.com/todos')
      // 2. Wandle den Response in JSON um
      .then((response) => response.json())
      // 3. Verarbeite die Todos
      .then((todosFromApi) => {
        // 4. Erzeuge die Zielstruktur für die Daten
        const allTodos = todosFromApi.slice(0, 9).map((todo) => ({
          title: todo.title,
          isDone: todo.completed,
          color: "var(--primary)",
        }));

        // Aktualisiere den State mit den Todos der API
        setTodos(allTodos);
      });
  }, []); // Nur einmal beim App-Start


  //PROGRAMM FÜR LOCAL STORAGE
  //Beim erstmaligen Laden der Seite die Todos aus dem LocalStorage holen
  // useEffect( function() {
  //   loadFromLocal('NEWSAVE')
  // }, [])

  //   function loadFromLocal(getdata) {
  //     const todosFromLocal = JSON.parse(localStorage.getItem(getdata)) ?? []
  //     setTodos(todosFromLocal)
  //   }


  // // Wenn die Todos sich ändern, dann im LocalStorage speichern!
  // useEffect(() => {
  //   saveToLocal('NEWSAVE', todos)
  // }, [todos])

    function saveToLocal(name, toSaveArray) {
      // localStorage.setItem(senddata, JSON.stringify(todos))
          localStorage.setItem(name, JSON.stringify(toSaveArray))
    }

  function addTodo(todo) {  
  setTodos([todo, ...todos])
}


  return (<div className="App">
    <Headline color="red" name="Have you forgotten?" />
    
      <Form onAddTodo={addTodo}/>

      <TodoList todos={todos}/>


  </div>)

}

export default App
