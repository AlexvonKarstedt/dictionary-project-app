import React, {useState} from 'react';
import './Dictionary.css';
import axios from 'axios';
import Results from './Results';
import Loader from "react-loader-spinner";

export default function Dictionary (props) {
    let [keyword, setKeyword] = useState (props.defaultKeyword);
    let [results, setResults] = useState (null);
    let [loaded, setLoaded] = useState (false)
    function handleResponse (response) {
        setResults(response.data[0]);
    }
    function search () {
//documentation: https://dictionaryapi.dev
let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit (event) {
    event.preventDefault()
    search();
    
}

function handleKeywordChange(event) {
    setKeyword(event.target.value);
}
function load () {
    setLoaded(true);
    search();
}

if (loaded) {
return (<div className="Dictionary">
    <section>
        <h1>Start typing your word...</h1>
    <form className="formControl" onSubmit={handleSubmit}> 
        <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} autoFocus={true}/>
        <a href="/" className="btn btn-primary shadow">Search</a>
    </form>
    <div className="hint">
        Suggested words: sunset, wine, yoga, plant...
    </div>
    </section>
    <Results results={results}/>
</div>
);
} else {
    load();
    return (
        <Loader
          type="ThreeDots"
          color="purple"
          height={100}
          width={100}
        />
      );
}
}