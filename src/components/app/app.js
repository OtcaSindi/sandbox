import React from 'react';

import TodoList from '../todo-list';
import InputForm from '../input-form';
import SearchPanel from '../search-panel';

import './app.css';

const App = ({todos}) => {
    return (
        <div className='todo'>
            <SearchPanel/>
            <TodoList todos={todos}/>
            <InputForm/>
        </div>
    )
};

export default App;