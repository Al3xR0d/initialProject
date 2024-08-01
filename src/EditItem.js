import { useState } from 'react';

export const EditItem = ({ task, editItem }) => {
  const [inputValue, setInputValue] = useState(task.name);

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      editItem(task.id, inputValue);
    }
  };

  return (
    <>
      <input
        placeholder="edit here"
        value={inputValue}
        autoFocus
        onKeyDown={onKeyDown}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={() => editItem(task.id, inputValue)}>Change</button>
    </>
  );
};
