import React from 'react';
import './Root.css';
import {Destruct} from './destruct'

class Nothing {
    happy = false;
    sad = true;
    despair() {
        return 'Ohhhhhhhhh'
    }
}

const ob = new Nothing();

function Root() {
  return (
    <div className="Root">
      <Destruct ob={['Alice', 'Bob']}/>
    </div>
  );
}

export default Root;
