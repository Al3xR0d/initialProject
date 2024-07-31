import { EditForm } from './EditItem';

export const AddItem = ({ task, deleteItem, editItem }) => {
  console.log(task);
  return (
    <>
      {task.map((item) => {
        return item.isEdit ? (
          <EditForm task={task} editItem={editItem} key={item.id} />
        ) : (
          <li key={item.id}>
            {item.name}
            <button onClick={() => editItem(item.id)}>Edit</button>
            <button onClick={() => deleteItem(item.id)}>X</button>
          </li>
        );
      })}
    </>
  );
};
