
import './App.css'
import Headline from './Headline';
import Box from './Box';
import Button from './Button';
import Todo from './Todo';


function App() {

  const todos = [
    { title: 'Milch kaufen', color: 'yellow'},
    { title: 'Eier kaufen', color: 'blue'},
    { title: 'Zum Baumarkt fahren', color: 'green'},
    { title: 'Tisch reparieren', color: 'red'},
    { title: 'Wandern', color: 'red'},
  ]

  const todoList = todos.map((todo, _index) => (
    <Todo key={_index} title={todo.title} color={todo.color} />))

 
  return (<div className="App">
    <Headline color="red" name="This is a classic todo List!" />
    
      <ul>

  {todoList}
        
      </ul>

    <Box backcolor="red" text="Dies ist eine rote Testbox" />

    <Button text="Drück mich!" />
    <Button isLarge text="Ich bin der große Button!" />
  </div>)

}

export default App
