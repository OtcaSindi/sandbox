import React from 'react';
import {connect} from 'react-redux';

import {remove, toggleImportant} from "../../actions";

import './todo-list-item.css';

const TodoListItem = ({item, remove, toggleImportant}) => {

    const important = item.important ? 'important' : '';

    return (
        <div className="todo-list-item">
            <div className={important}>
                {item.title}
            </div>
            <div>
                <button
                    onClick={() => toggleImportant(item.id)}
                >
                    !
                </button>
                <button
                    onClick={() => remove(item.id)}
                >
                    &times;
                </button>
            </div>
        </div>
    )
};

const mapDispatchToProps = {remove, toggleImportant};

export default connect(null, mapDispatchToProps)(TodoListItem);