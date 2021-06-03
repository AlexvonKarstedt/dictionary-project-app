import React from 'react';
import Meaning from './Meaning'
import Phonetic from './Phonetic';
import './Results.css';

export default function Results (props) {
    if (props.results) {
        return (
            <div className="Results">
                <section>
                <h2 className="text-capitalize">{props.results.word}</h2>
                    <span className="text-capitalize">{props.results.phonetics.map(function (phonetic, index) {
                        return (
                        <div key={index}>
                            <Phonetic phonetic={phonetic} />
                        </div>
                        );
                    })}
                    </span>
                    </section>
                    <span className="text-capitalize">{props.results.meanings.map(function(meaning, index){   
                   return <section key={index}>
                       <Meaning meaning={meaning} />
                       </section> 
                })}
                </span>
            </div>
        );
 } else {
    return null
    
 }
}