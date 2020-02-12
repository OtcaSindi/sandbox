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
    visibleTodos: [
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
            if (action.payload) {
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
                    visibleTodos: newTodos,
                    lastId: state.lastId + 1
                };
            } else {
                return state;
            }
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
                todos: newTodos,
                visibleTodos: newTodos
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
                todos: newTodos,
                visibleTodos: newTodos
            };
        }

        case 'EDIT_VISIBLE_TODOS': {
            const searchText = action.payload;

            const newVisibleTodos = state.todos
                .filter((item) => {
                    const lowerCaseTitle = item.title.toLowerCase();
                    return lowerCaseTitle.includes(searchText.toLowerCase())
                });
            return {
                ...state,
                visibleTodos: newVisibleTodos
            }
        }

        default:
            return state;
    }
};

export default reducer;