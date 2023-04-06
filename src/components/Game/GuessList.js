import React from 'react';

export function GuessList ({ valueList }) {
    
    return (
        <div className="guess-results">
            {valueList.map(({id, label}) => {
                return <p
                            className="guess"
                            key={id}>
                                {label}
                            </p>
            })}
        </div>
    )
}