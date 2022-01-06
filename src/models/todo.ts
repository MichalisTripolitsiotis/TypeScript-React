class Todo {
    id: string;
    text: string;

    constructor(text: string) {
        this.id = new Date().toISOString(); //Auto generated ID
        this.text = text;
    }
}

export default Todo;