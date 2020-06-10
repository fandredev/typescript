type Todo = {
    title: string,
    description: string,
    completed: boolean
}
const todo: Readonly<Todo> = {
    title: 'Assistir Dark de novo',
    description: 'Relembrar detalhes',
    completed: false
}

// Todo.completed = true // erro
console.log(todo)

function updatedTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate }
}
const todo2: Todo = updatedTodo(todo, { completed: false })

// Pick - pegar valores especificos dentro de um objeto

type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = { title: 'Fechar Ghost of Tsushima', completed: false }

// Omit - Omitir o campo especificado dentro de um objeto 
type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview = { title: 'Fechar Ghost of Tsushima', completed: false }
