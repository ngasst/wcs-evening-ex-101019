import React from 'react';

export const Destruct = ({ob}) => {
    let render = null;

    if (!['undefined', 'number', 'string'].includes(typeof ob) && !Array.isArray(ob) && ob !== null) {
        const json = JSON.stringify(ob);
        render = <p>{json}</p>
    } else {
        render = <p style={{color: 'red'}}>NOT AN OBJECT</p>
    }
    return <div>{render}</div>
}