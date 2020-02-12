
const add = (newTodo) => {
    return {
        type: 'ADD',
        payload: newTodo
    }
};

const remove = (idTodo) => {
    return {
        type: 'REMOVE',
        payload: idTodo
    }
};

const toggleImportant = (idTodo) => {
    return {
        type: 'TOGGLE_IMPORTANT',
        payload: idTodo
    }
};

const editVisibleTodos = (searchText) => {
    return {
        type: 'EDIT_VISIBLE_TODOS',
        payload: searchText
    }
};

export {
    add,
    remove,
    toggleImportant,
    editVisibleTodos
}