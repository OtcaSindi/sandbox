
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

export {
    add,
    remove,
    toggleImportant
}