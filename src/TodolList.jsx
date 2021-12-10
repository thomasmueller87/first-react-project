import styled from "styled-components";
import Todo from "./Todo";

function TodoList({todos}) {

    const todoList = todos.map((todo, _index) => (
        <Todo key={_index} title={todo.title} color={todo.color} />))

return (
    <Ulstyle>
    {todoList}
        </  Ulstyle>
)
}

const Ulstyle = styled.ul`
    padding-left: 0.7rem
`

export default TodoList;
