import React, {useState} from 'react';
import {connect} from 'react-redux';

import {add} from "../../actions";

import './input-form.css'

const InputForm = ({add}) => {
    const [inputText, setInputText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        inputText && add(inputText);
        setInputText('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button>
                Add
            </button>
        </form>
    )
};

const mapDispatchToProps = {add};

export default connect(null, mapDispatchToProps)(InputForm);