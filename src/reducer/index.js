
const initialState = {
    todos: [
        {
            id: 1,
            title: 'Разобраться с Redux'
        },
        {
            id: 2,
            title: 'Разобраться с react-router-dom'
        }
    ],
    nextId: 2
};

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case 'ADD':
            const newItem = {
                id: state.nextId + 1,
                title: action.payload
            };
            return {
                ...state,
                todos: [
                    ...state.todos,
                    newItem
                ],
                nextId: state.nextId + 1
            };

        case 'REMOVE':
            const id = action.payload;
            const {todos} = state;

            const idx = todos.findIndex((item) => item.id === id);
            return {
                ...state,
                todos: [
                    ...todos.slice(0, idx),
                    ...todos.slice(idx + 1)
                ]
            };

        default:
            return state;
    }
};

export default reducer;