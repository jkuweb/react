import React from "react";
import { Task } from "./Task";
import { TasksModel } from "./data-models";

interface Props {
  tasks: TasksModel[];
  onChange: (task: TasksModel) => void;
  onDelete: (id: number) => void;
}

export const ListTask: React.FC<Props> = ({ tasks, onChange, onDelete }) => {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onChange={onChange} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
};
