import React, {useState} from 'react';

import './search-panel.css';

const SearchPanel = ({setTextSearchPanel}) => {

    const [inputText, setInputText] = useState('');

    const onChangeInput = (e) => {
        setInputText(e.target.value);
        setTextSearchPanel(e.target.value);
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

export default SearchPanel;