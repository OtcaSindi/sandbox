import {combineReducers} from 'redux';

const initialState = {
    todos: [
        {
            id: 1,
            title: 'Разобраться с Redux',
            important: false
        },
        {
            id: 2,
            title: 'Разобраться с react-router-dom',
            important: true
        }
    ],
    lastId: 2
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD': {
            const newItem = {
                id: state.lastId + 1,
                title: action.payload,
                important: false
            };

            const newTodos = [
                ...state.todos,
                newItem
            ];

            return {
                ...state,
                todos: newTodos,
                lastId: state.lastId + 1
            };
        }

        case 'REMOVE': {
            const id = action.payload;
            const {todos} = state;

            const idx = todos.findIndex((item) => item.id === id);
            const newTodos = [
                ...todos.slice(0, idx),
                ...todos.slice(idx + 1)
            ];
            return {
                ...state,
                todos: newTodos
            };
        }

        case 'TOGGLE_IMPORTANT': {
            const todoId = action.payload;
            const idxChange = state.todos.findIndex((item) => item.id === todoId);

            const chageItem = {
                ...state.todos[idxChange],
                important: !state.todos[idxChange].important
            };

            const newTodos = [
                ...state.todos.slice(0, idxChange),
                chageItem,
                ...state.todos.slice(idxChange + 1)
            ];

            return {
                ...state,
                todos: newTodos
            };
        }

        default:
            return state;
    }
};
export default reducer;