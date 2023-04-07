import React from "react";

function Banner ({ answer, valueList, limit }) {
    if (valueList.length > 0) {
        if (valueList[valueList.length - 1].label === answer) {
            return (
                <div className="happy banner">
                    <p>
                        <strong>Congratulations!</strong> Got it in
                        <strong> {valueList.length} guesses</strong>.
                    </p>
                </div>
            )
        }
    }

    if (valueList.length >= limit) {
        return (
            <div className="sad banner">
                <p>Sorry, the correct answer is <strong> {answer}</strong>.</p>
            </div>
        )
    }
}

export default Banner;