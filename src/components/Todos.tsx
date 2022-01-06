import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

// Todos: React.FC<{ ... }>
// Type annotation to all custom components
// Specifies the children attribute from props (already-built in)

// Programmer describes the passing props between: <{...}>
const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map(item => (
                <TodoItem key={item.id} text={ item.text}/>
            ))}
        </ul>
    );
}

export default Todos;