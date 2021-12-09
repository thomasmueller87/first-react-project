import Button from './Button'

function Form({ onAddTodo }) {

    function handleFormSubmit(event) {
        event.preventDefault(); // Verhindert Absenden des Formulars = neuladen der Seite
        
        //Eventwurde im Formular ausgelöst, event.targ
        const form = event.target;
        const inputField = form.todo
        const inputValue = inputField.value
        
        const newTodo = {
          title: inputValue, color: 'gray'
        };

        onAddTodo(newTodo);

        form.reset();
        inputField.focus();
        }

    return (
    <form onSubmit={handleFormSubmit}>
    <input type="text" name="todo" placeholder="Add a todo..." />
    <Button text="Submit" />
    </form>
    )
}

export default Form