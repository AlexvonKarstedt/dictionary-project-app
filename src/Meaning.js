import React from 'react';
import './Meaning.css'
import Synonyms from './Synonyms'


export default function Meaning (props) {
    console.log (props.meaning);
    return (<div className="Meaning">
    <h3>{props.meaning.partOfSpeech}</h3>
    {props.meaning.definitions.map(function(definition, index){
        return (
            <div key={index}>
                <div className="definition">
               {definition.definition}
               </div>
                <br />
                <div className="example">
               <em>{definition.example}</em>
               </div>
                <br />
                <Synonyms synonyms={definition.synonyms}/>
               </div>
        )
    })}
    <p>{props.meaning.definitions[0].definition}</p>
    <p>{props.meaning.definitions[0].example}</p>
    </div>
    );
}