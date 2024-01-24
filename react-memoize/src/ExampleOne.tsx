import React from "react";

export const ExampleOne = () => {
  const [user, setUser] = React.useState({
    name: "joseba",
    lastName: "querejeta",
  });
  const [count, setCount] = React.useState(0);
  return (
    <div style={{ marginTop:'4rem', display:'grid' }}>
      <h2>Example 1 : React.memo</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>counter {count}</button>
      </div>
      <input
        type="text"
        value={user.name}
        onChange={(e) =>
          setUser({
            ...user,
            name: e.target.value,
          })
        }
      />
      <input
        type="text"
        value={user.lastName}
        onChange={(e) =>
          setUser({
            ...user,
            lastName: e.target.value,
          })
        }
      />
        <MyChildComponent name={user.name} />
    </div>
  );
};
// Sí no me cambias la entrada te devuelvo la última entrada que tengo guardada
const MyChildComponent = React.memo(({ name }) => {
  console.log("MyChildComponent -> me estoy renderizando");
  return (
    <>
      <p>
        {name} 
      </p>
    </>
  );
});
