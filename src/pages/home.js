import React, {Fragment, useState} from 'react';

import TodoList from '../components/todo-list';
import InputForm from '../components/input-form';
import SearchPanel from '../components/search-panel';

import {connect} from 'react-redux';

const Home = ({todos}) => {

    const [textSearchPanel, setTextSearchPanel] = useState('');
    const visibleTodos = todos.filter((item) => {
        const itemLowerCase = item.title.toLowerCase();
        return itemLowerCase.includes(textSearchPanel.toLowerCase())
    });

    return (
        <Fragment>
            <div className='container'>
                <SearchPanel setTextSearchPanel={setTextSearchPanel}/>
                <TodoList todos={visibleTodos}/>
                <InputForm/>
            </div>
        </Fragment>
    )
};

const mapStateToProps = ({todos}) => {
    return {
        todos
    }
};

export default connect(mapStateToProps)(Home);