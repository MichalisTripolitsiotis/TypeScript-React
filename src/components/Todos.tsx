import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

// Todos: React.FC<{ ... }>
// Type annotation to all custom components
// Specifies the children attribute from props (already-built in)

// Programmer describes the passing props between: <{...}>
const Todos: React.FC<{ items: Todo[], onRemoveTodo: (id: string) => void }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map(item => (
                // .bind is used to pre configure a function for future execution.
                //
                <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id) }/>
            ))}
        </ul>
    );
}

export default Todos;