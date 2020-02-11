
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

export {
    add,
    remove
}