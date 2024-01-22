import React from "react";
import { AddTask } from "./AddTask";
import { initialTasks } from "./data";
import { TasksModel } from "./data-models";
import { ListTask } from "./ListTask";

let nextId = 2;

function App() {
  const [tasks, setTasks] = React.useState<TasksModel[]>(initialTasks);
  const handleAddTask = (text: string) => {
    setTasks([...tasks, { id: ++nextId, text: text, done: false }]);
  };
  console.log(tasks);
  const handleChangeTask = (task: TasksModel) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  };

  const handleOnDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
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

export default App;
