export function addTodo(text) { //Middleware
    return {
        type: 'ADD_TODO',
        text: text,
    }
}