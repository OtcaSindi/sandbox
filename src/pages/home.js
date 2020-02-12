import React, {Fragment} from 'react';

import TodoList from '../components/todo-list';
import InputForm from '../components/input-form';
import SearchPanel from '../components/search-panel';

const Home = () => {
    return (
        <Fragment>
            <div className='container'>
                <SearchPanel/>
                <TodoList />
                <InputForm/>
            </div>
        </Fragment>
    )
};

export default Home;