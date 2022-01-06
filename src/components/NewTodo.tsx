import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from './NewTodo.module.css';

// React.FC<{onAddTodo: (text: string) => void }> = (props) => {...}
// NOW WE USE CONTEXT. CODE ABOVE IF WE DON'T USE CONTEXT

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        
        // ? (instead of !) specifies that if entered value exists, to be stored. Otherwise null will be stored
        // ! ensures that string will be passed to the ref
        // (hover over enteredText to see)
        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }
       
        todosCtx.addTodo(enteredText);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef}/>
            <button>Add</button>
        </form>
    )
}

export default NewTodo;
