import React from "react";

interface Props {
  onReset: () => void;
}
const ResetValue: React.FC<Props> = React.memo((props) => {
  const { onReset } = props;
  console.log("me renderizo ");
  return (
    <>
      <button onClick={onReset}>Borrar</button>
    </>
  );
});

export const App = () => {
  const [nombre, setNombre] = React.useState("");
  const resetNameCallback = React.useCallback(() => {
    setNombre("");
  }, []);
  return (
    <>
      <h1>{nombre}</h1>
      <ResetValue onReset={resetNameCallback} />
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
    </>
  );
};
