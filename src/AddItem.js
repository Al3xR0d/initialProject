import { EditItem } from './EditItem';

export const AddItem = ({ task, deleteItem, editItem, handleDone }) => {
  return (
    <>
      {task.map((item) => {
        return item.isEdit ? (
          <EditItem task={item} editItem={editItem} key={item.id} />
        ) : item.isDone ? (
          <li key={item.id} onClick={() => handleDone(item.id)} style={{ textDecoration: 'line-through' }}>
            {item.name}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteItem(item.id);
              }}
            >
              X
            </button>
          </li>
        ) : (
          <li key={item.id} onClick={() => handleDone(item.id)}>
            {item.name}
            <button
              onClick={(e) => {
                e.stopPropagation();
                editItem(item.id);
              }}
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteItem(item.id);
              }}
            >
              X
            </button>
          </li>
        );
      })}
    </>
  );
};
