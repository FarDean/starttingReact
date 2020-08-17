import React from 'react'
import '../App.css'


export default function Counter(){
    const state = {
        count: 0
    };
    function countClass() {
        let classes = "badge";
        classes += state.count === 0 ? "" : "-blue";
        return classes;
    }

    function setZero(){
        const {count} = state
        return count === 0 ? 'Zero': count
    }
    return(
        <>
            <span className={countClass()}>{setZero()}</span>
            <button>Increment</button>
        </>
    )
}

