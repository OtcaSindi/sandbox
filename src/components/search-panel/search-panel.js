import React, {useState} from 'react';
import {connect} from 'react-redux';

import {editVisibleTodos} from "../../actions";

import './search-panel.css';

const SearchPanel = ({editVisibleTodos}) => {

    const [inputText, setInputText] = useState('');

    const onChangeInput = (e) => {
        setInputText(e.target.value);
        editVisibleTodos(e.target.value); // почему не inputText
    };

    return (
        <input
            type="text"
            value={inputText}
            onChange={onChangeInput}
            placeholder="Введите искомую запись"
            className="input-search-panel"
        />
    )
};

const mapDispatchToProps = {editVisibleTodos};

export default connect(null, mapDispatchToProps)(SearchPanel);