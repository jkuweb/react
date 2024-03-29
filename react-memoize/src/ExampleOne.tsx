import React, { useMemo } from "react";

export const ExampleOne = () => {
  const [user, setUser] = React.useState({
    name: "joseba",
    lastName: "querejeta",
  });
  const [count, setCount] = React.useState(0);

  /* SOLUCIÓN */
  const mappedMemoized = useMemo(() => {
    return {
      firstName: user.name,
      lastName: user.lastName,
    };
  }, [user.name, user.lastName]);

  const handleReset = React.useCallback(() => {
    setUser({
      name: "",
      lastName: "",
    });
  }, []);

  return (
    <div style={{ marginTop: "4rem", display: "grid" }}>
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
        onChange={(e) => {
          setUser({
            ...user,
            lastName: e.target.value,
          });
        }}
      />

      {/* <MyChildComponent name={user.name} /> */}

      <MySecondComponent
        user={{
          // <-- nuevo objeto
          // mapeamos el objeto para que coincida la firma
          firstName: user.name,
          lastName: user.lastName,
        }}
        /* SOLUCION */
        // user={mappedMemoized}
      />
      <MythirdComponent user={mappedMemoized} onReset={handleReset} />
    </div>
  );
};
// Sí no me cambias la entrada te devuelvo la última entrada que tengo guardada
interface Props {
  name: string;
}
const MyChildComponent: React.FC<Props> = React.memo(({ name }) => {
  console.log("MyChildComponent -> me estoy renderizando");
  return (
    <>
      <p>{name}</p>
    </>
  );
});

// En este caso si el padre actualiza su estado y se vuelve a renderizar
// cuando llega a la línea del MySecondComponent, lo que estamos haciendo en
// crear un nuevo objeto con el nuevo mapeo y esto va a ocurrir cada vez que
// pulsemos el botón del contador (que está en el padre)

//  - pulso botón counter
//  - se actualiza el estado
//  - se actualiza el componente padre
//  - el padre tiene un componente hijo
//  - aunque las entradas sean las mismas y tenemos defino el react.memo
//    estamos creando un nuevo ojeto literal {...}, y eso hace que el componente
//    hijo se actualice y se vuelva a renderizar
//    SOLUCIÓN (línea 10, 53)

interface User {
  user: {
    firstName: string;
    lastName: string;
  };
}
const MySecondComponent: React.FC<User> = React.memo(({ user }) => {
  //console.log("MySecondComponent -> me estoy renderizando" + user);
  return (
    <>
      <p>
        {user.firstName} {user.lastName}
      </p>
    </>
  );
});

// En este caso estamos pasando una callback, para que cuando pulse el
// botón, el padre, actualice el estado.
// Ahora lo que esta haciendo el componente padre es actualizar y volver
// a renderizar el componente y en este caso crea una nueva función:
//  setUser(
//            {
//             name: '',
//              lastName: ''
//            }
//          )
// Aunque la función sea la misma y no cambia, cada vez que se vuelve a
// renderizar, vuelve a generar esa misma función.
// SOLUCION (línea 10)
interface UserType {
  user: {
    firstName: string;
    lastName: string;
  };
  onReset: () => void;
}
const MythirdComponent: React.FC<UserType> = React.memo(({ user, onReset }) => {
  console.log("MyThirdComponent -> me estoy renderizando" + user);
  return (
    <>
      <p>
        {user.firstName} {user.lastName}
      </p>
      <button onClick={onReset}>Reset</button>
    </>
  );
});
