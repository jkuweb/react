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
      type: actionTypes.ADDED,
      payload : {
        id: nextId++,
        text: text,
      }
    });
  };
  const handleChangeTask = (task: TasksModel) => {
    dispatch({
      type: actionTypes.CHANGED,
      payload: {
        task: task,
      }
    });
  };

  const handleOnDelete = (id: number) => {
    dispatch({
      type: actionTypes.DELETED,
      payload: {
        id: id,
      }
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
interface Action {
  type: string
  payload: any
}
const actionTypes = {
  ADDED: 'added',
  CHANGED: 'changed',
  DELETED: 'deleted'
}
function tasksReducer(tasks:TasksModel[], action:Action): TasksModel[] {
  switch (action.type) {
    case actionTypes.ADDED: {
      return [
        ...tasks,
        {
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        },
      ];
    }
    case actionTypes.CHANGED: {
      return tasks.map((t) => {
        if (t.id === action.payload.task.id) {
          return action.payload.task;
        } else {
          return t;
        }
      });
    }
    case actionTypes.DELETED: {
      return tasks.filter((t) => t.id !== action.payload.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
export default App;
