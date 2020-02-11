import React from 'react';
import {connect} from 'react-redux';

import {remove} from "../../actions";

import './todo-list-item.css';

const TodoListItem = ({item, remove}) => {
    return (
        <div className="todo-list-item">
            {item.title}
            <button
                onClick={() => remove(item.id)}
            >
                &times;
            </button>
        </div>
    )
};

const mapDispatchToProps = {remove};

export default connect(null, mapDispatchToProps)(TodoListItem);