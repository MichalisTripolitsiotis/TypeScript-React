import React, { useRef } from "react";
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {
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
       
        props.onAddTodo(enteredText);
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
