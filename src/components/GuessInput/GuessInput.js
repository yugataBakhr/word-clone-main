import React from "react";

function GuessInput ({ valueList, setValueList, answer, limit, toggleStatus }) {
    const [value, setValue] = React.useState("");
    
    const putValueInList = item => {
        const newItem = {
            id: crypto.randomUUID(),
            label: item
        }
        setValueList([...valueList, newItem]);
    }


    if (valueList.length > 0) {
        if (valueList[valueList.length - 1].label === answer || valueList.length >= limit ) {
            return;
        }
    }

    return (
        <>
            <form 
                className="guess-input-wrapper"
                onSubmit={
                    event => {
                        event.preventDefault();
                        console.log(value);
                        if (value.length === 5) {
                            putValueInList(value);
                        }
                        toggleStatus(value);
                        setValue("");
                    }
                }
                
                >
                <label htmlFor="guess-input">Enter guess:</label>
                <input 
                    id="guess-input" 
                    type="text"
                    value={value}
                    pattern="[A-Z]{5}"
                    minLength="5"
                    maxLength="5"
                    onChange={
                        event => {
                            const upperCased = event.target.value.toUpperCase();
                            setValue(upperCased);
                        }
                    }
                     />
            </form>
        </>
    )
}

export default GuessInput;