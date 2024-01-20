import React from "react";

// const useSafeState = function <T>(
//   initialValue: T
// ): [T, React.Dispatch<React.SetStateAction<T>>] {
//   const mountedRef = React.useRef(false)
//   const [state, setState] = React.useState<T>(initialValue);
//   React.useEffect(() => {
//     mountedRef.current = true;
//     return () => mountedRef.current = false;
//   }, []);

//   const isMounted = () => mountedRef.current;
//   const setSafeState = function (
//     data: T
//   ): React.Dispatch<React.SetStateAction<T>> | void | null {
//     return isMounted() ? setState(data) : null;
//   };

//   return [state, setSafeState];
// };

const useSafeState = function (initialValue) {
  console.log(initialValue)
  const mountedRef = React.useRef(false)
  const [state, setState] = React.useState(initialValue);
  React.useEffect(() => {
    mountedRef.current = true;
    return () => {mountedRef.current = false};
  }, []);

  const isMounted = () => mountedRef.current;
  const setSafeState = function ( data) {
    console.log(data)
    return isMounted() ? setState(data) : null;
  };

  return [state, setSafeState];
};


interface User {
  id: number;
  name: string;
}
const UserList: React.FC = () => {
  const [userCollection, setUserCollection] = useSafeState<User[]>([]);
  const [filter, setFilter] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
        .then((response) => response.json())
        .then((users) => setUserCollection(users));
    }, 2000);
  }, [filter]);

  return (
    <>
      <ul>
        {userCollection.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </>
  );
};

export const App = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <>
      {isVisible && (
        <>
          <UserList />
        </>
      )}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Ocultar" : "Mostrar"}
      </button>
    </>
  );
};
