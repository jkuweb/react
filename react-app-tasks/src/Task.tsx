import React from "react";
import { TasksModel } from "./data-models";

interface Props {
  task: TasksModel;
  onChange: (task: TasksModel) => void;
  onDelete: (id: number) => void;
}

export const Task: React.FC<Props> = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = React.useState(false);

  let contentText;

  if (isEditing) {
    contentText = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Guardar</button>
      </>
    );
  } else {
    contentText = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Editar</button>
      </>
    );
  }

  return (
    <>
      <li key={task.id}>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChange({
              ...task,
              done: e.target.checked,
            });
          }}
        />
        {contentText}
        <button
          onClick={() => {
            onDelete(task.id);
          }}
        >
          Borrar
        </button>
      </li>
    </>
  );
};
