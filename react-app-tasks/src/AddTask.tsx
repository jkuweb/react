import React from "react";

interface Props {
  onAddTask: (text: string) => void;
}

export const AddTask: React.FC<Props> = ({ onAddTask }) => {
  const [text, setText] = React.useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Agregar tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTask(text);
          setText("");
        }}
      >
        Agregar
      </button>
    </>
  );
};
