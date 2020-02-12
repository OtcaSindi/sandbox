import React from 'react';
import {connect} from 'react-redux';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({todos}) => {
    return (
        <ul className="todo-list">
            {
                todos.map((item) => {
                    return (
                        <li key={item.id}>
                            <TodoListItem item={item}/>
                        </li>
                    )
                })
            }
        </ul>
    )
};

export default TodoList;