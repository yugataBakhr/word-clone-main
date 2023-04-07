import React from "react";
import { range } from '../../utils';

function Keyboard ({ keyArr }) {
    
    return (
        <div className="keyboard-wrapper">
            {range(3).map(row => (
                <div className="keyboard-row-wrapper"
                     key={`row-contains-${row}`}>
                    {keyArr[row].map(column => (
                        <div className={`keyboard ${column.status}`}
                             key={column.letter}>
                            <p className="keyboard-content" key={column.letter}>{column.letter}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Keyboard;