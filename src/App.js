import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import { AddItem } from './AddItem';
import { Filtres } from './Filtres';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [task, setTask] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(task);
  }, [task]);

  useEffect(() => {
    handleData();
  }, [currentFilter]);

  const addItem = () => {
    setTask((prev) => [...prev, { name: inputValue, id: uuid(), isEdit: false, isDone: false }]);
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

  const editItem = (id, newName) => {
    setTask(task.map((item) => (item.id === id ? { ...item, name: newName, isEdit: !item.isEdit } : { ...item })));
  };

  const handleDone = (id) => {
    setTask(task.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : { ...item })));
  };

  const handleData = () => {
    if (currentFilter === 'deleted') {
      setFilteredData(task.filter((item) => !!item.isDone));
    } else if (currentFilter === 'inWork') {
      setFilteredData(task.filter((item) => !item.isDone));
    } else {
      setFilteredData(task);
    }
  };

  return (
    <>
      <input placeholder="tap here" value={inputValue} onChange={updateState} onKeyDown={onKeyDown} />
      <button onClick={addItem}>Добавить</button>
      <br />
      <Filtres setCurrentFilter={setCurrentFilter} />
      <ul>
        <AddItem task={filteredData} deleteItem={deleteItem} editItem={editItem} handleDone={handleDone} />
      </ul>
    </>
  );
};

export default App;
