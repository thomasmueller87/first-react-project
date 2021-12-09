import Todo from "./Todo";

function TodoList({todos}) {

    const todoList = todos.map((todo, _index) => (
        <Todo key={_index} title={todo.title} color={todo.color} />))

return (
    <ul>
    {todoList}
        </ul>
)
}

export default TodoList;
