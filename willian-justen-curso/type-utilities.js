"use strict";
const todo = {
    title: 'Assistir Dark de novo',
    description: 'Relembrar detalhes',
    completed: false
};
// Todo.completed = true // erro
console.log(todo);
function updatedTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo2 = updatedTodo(todo, { completed: false });
const todo3 = { title: 'Fechar Ghost of Tsushima', completed: false };
const todo4 = { title: 'Fechar Ghost of Tsushima', completed: false };
//# sourceMappingURL=type-utilities.js.map