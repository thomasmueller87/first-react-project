import { useState } from 'react';
import './Todo.css';

function Todo({color, title}) {
    const [isDone, setIsDone] = useState(false)
    console.log(isDone)
    
    
    function markDone() {
        // Zustandsänderung, ausgelöst durch Checkbox
        setIsDone(!isDone)
        // Render läuft erneut
          }
    
     const listClass = isDone ? 'finished' : '';

    return <li className={listClass} style={{ color: color}}>
        <label>
            <input type="checkbox" onChange={markDone} /> {title}
        </label>
        </li>
}

  export default Todo