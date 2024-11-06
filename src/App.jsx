import React, { useState } from 'react';
import './App.css';
import Todolist from './todolist';

function App() {
   
  //variables
  const [item, setItem] = useState('');
  const [itemlist, setItemlist] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedItemId, setEditedItemId] = useState(null);

  const createItem = (e) => {
    setItem(e.target.value);
  };

  const additem = () => {
     // check weather still editing or not
    if (isEditing) {
      const updatedList = itemlist.map((existingItem, index) =>
        index === editedItemId ? item : existingItem

      );
      setItemlist(updatedList);
      setItem('');
      setEditedItemId(null);
      setIsEditing(false);
    } else {
      setItemlist([...itemlist, item]);
      setItem('');
    }
  };

  const editItem = (id) => {
    const itemToEdit = itemlist[id];
    setItem(itemToEdit);
    setIsEditing(true);
    setEditedItemId(id);
  };

  const deleteItem = (id) => {
    setItemlist((itemlist) => {
      return itemlist.filter((arrelement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className='container'>
        <div className='innerbox'>
          <h4>Todo list </h4>

          <div className='box2'>
            <div>
              <input
                type='text'
                placeholder='Add new Items'
                onChange={createItem}
                value={item}
              />
            </div>
            <div>
              <button onClick={additem}>{isEditing ? 'Update' : 'Add'}</button>
            </div>
          </div>
          <br />
          <div>
            {itemlist.map((item, index) => {
              return (
                <div key={index}>
                  <Todolist
                    data={item}
                    id={index}
                    onSelect={deleteItem}
                    onEdit={editItem}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
