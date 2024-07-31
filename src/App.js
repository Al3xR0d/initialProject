import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import { AddItem } from './AddItem';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [task, setTask] = useState([]);

  const addItem = () => {
    setTask((prev) => [...prev, { name: inputValue, id: uuid(), isEdit: false, isFinish: false }]);
    setInputValue('');
  };

  const updateState = (e) => {
    setInputValue(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  const deleteItem = (id) => {
    setTask(task.filter((item) => item.id !== id));
  };

  const editItem = (id, inputValue) => {
    console.log(id);
    // console.log(task);
    setTask(task.map((item) => (item.id === id ? { ...task, isEdit: !task.isEdit } : { ...task })));
  };

  // const editTask = (task, id) => {
  //   setTask(task.map((todo) => (todo.id === id ? { ...todo, task, isEdit: !todo.iisEdit } : todo)));
  // };

  return (
    <>
      <input placeholder="tap here" value={inputValue} onChange={updateState} onKeyDown={onKeyDown} />
      <button onClick={addItem}>Добавить</button>
      <ul>
        <AddItem task={task} deleteItem={deleteItem} editItem={editItem} />
      </ul>
    </>
  );
};

export default App;
