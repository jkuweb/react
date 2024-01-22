import React from "react";
import { AddTask } from "./AddTask";
import { initialTasks } from "./data";
import { TasksModel } from "./data-models";
import { ListTask } from "./ListTask";

let nextId = initialTasks.length;

function App() {
  const [tasks, dispatch] = React.useReducer(tasksReducer, initialTasks);

  const handleAddTask = (text: string) => {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  };
  const handleChangeTask = (task: TasksModel) => {
    dispatch({
      type: "changed",
      task: task,
    });
  };

  const handleOnDelete = (id: number) => {
    dispatch({
      type: "deleted",
      id: id,
    });
  };

  return (
    <>
      <h1>Lista de tareas</h1>
      <AddTask onAddTask={handleAddTask} />
      <ListTask
        tasks={tasks}
        onChange={handleChangeTask}
        onDelete={handleOnDelete}
      />
    </>
  );
}

function tasksReducer(tasks:TasksModel[], action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
export default App;
