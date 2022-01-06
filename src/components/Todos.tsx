import Todo from "../models/todo";
// Todos: React.FC<{ ... }>
// Type annotation to all custom components
// Specifies the children attribute from props (already-built in)

// Programmer describes the passing props between: <{...}>
const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items.map(item => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    );
}

export default Todos;