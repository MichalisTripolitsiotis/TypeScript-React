import { useContext } from "react";
//import Todo from "../models/todo";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

// Todos: React.FC<{ ... }>
// Type annotation to all custom components
// Specifies the children attribute from props (already-built in)

// Programmer describes the passing props between: <{...}>
// React.FC<{ items: Todo[], onRemoveTodo: (id: string) => void }> = (props)
// NOW WE USE CONTEXT. CODE ABOVE IF WE DON'T USE CONTEXT

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map(item => (
                // .bind is used to pre configure a function for future execution.
                <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id) }/>
            ))}
        </ul>
    );
}

export default Todos;