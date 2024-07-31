import { useState } from 'react';

export const EditForm = ({ task, editItem }) => {
  const [inputValue, setInputValue] = useState(task.name);
  console.log(task);
  return (
    <>
      <input
        placeholder="edit here"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={() => editItem(task.id, inputValue)}>Change</button>
    </>
  );
};
