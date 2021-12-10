import { useState } from 'react';
import './Todo.css';
import styled from 'styled-components';


function Todo({color, title}) {
    const [isDone, setIsDone] = useState(false)
        
    
    function markDone() {
        // Zustandsänderung, ausgelöst durch Checkbox
        setIsDone(!isDone)
        // Render läuft erneut
          }
    
     const listClass = isDone ? 'finished' : '';



    return <Listitem className={listClass} style={{ color: color}}>
        <label>
            <input type="checkbox" onChange={markDone} /> {title}
        </label>
        </Listitem>
    
    
}


const Listitem = styled.li`
list-style-type:none
`

  export default Todo