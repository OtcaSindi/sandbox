import React from 'react';

import TodoList from '../todo-list';
import InputForm from '../input-form';

import './app.css';

const App = ({todos}) => {
    return (
        <div className='todo'>
            <TodoList/>
            <InputForm/>
        </div>
    )
};

export default App;