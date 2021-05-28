import React, {useState} from 'react';
import './Dictionary.css';
import axios from 'axios';
import Results from './Results';

export default function Dictionary () {
    let [keyword, setKeyword] = useState ("");
    let [results, setResults] = useState (null);

    function handleResponse (response) {
        console.log (response.data[0]);
        console.log (response.data[0].meanings[0].definitions[0].definition)
        setResults(response.data[0]);
    }

    function search (event) {
    event.preventDefault()
    alert (`Searching for ${keyword} definition...`);

    //documentation: https://dictionaryapi.dev

let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(handleResponse);
console.log(apiUrl);
}



function handleKeywordChange(event) {
    setKeyword(event.target.value);
}

return (<div className="Dictionary">
    <form className="formControl" onSubmit={search}> 
        <input type="search" onChange={handleKeywordChange} autoFocus={true}/>
        <a href="/" className="btn btn-primary shadow">Search</a>
    </form>
    <Results results={results}/>
</div>
);
}