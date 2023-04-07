import React from "react";

import { range } from '../../utils';

function Guess ({ rows, valueList, checkGuess, answer }) {
        //rows === number of guesses!
        return (
                <div 
                className="guess-results"
                >
                        {/* don't touch whats above*/}
                        {range(rows).map(row => {
                                if (!valueList[row]) {
                                        return (
                                                <p className="guess" key={row}>
                                                        {range(5).map(column => (
                                                                <span className="cell" 
                                                                      key={`${row}-${column}`}>

                                                                </span>
                                                        ))}
                                                </p>
                                        )
                                } else {
                                        return (
                                                <p className="guess" key={row}>
                                                        {range(5).map(column => (
                                                             <span className={`cell ${checkGuess(valueList[row].label, answer)[column].status}`}
                                                                   key={`${row}-${column}`}>
                                                                {valueList[row].label[column]}
                                                             </span>   
                                                        ))}
                                                </p>
                                        )
                                }
                        }
                                
                        )}
                </div>
        )
}

export default Guess;