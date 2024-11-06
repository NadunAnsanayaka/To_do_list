import React from 'react';
import './App.css';

export const Todolist = (props) => {
  return (
    <div>
      <div className='box2'>
        <h3>{props.data}</h3>
        <button onClick={() => props.onEdit(props.id)}>edit</button>
        <button onClick={() => props.onSelect(props.id)}>delete</button>
      </div>
      <br />
    </div>
  );
};

export default Todolist;
