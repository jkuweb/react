import React from "react";
import { useDebounce } from "use-debounce";

interface UsersModel {
  id: number,
  name: string
}
// custom hook
const useFilterUsers = (filter: string) => {
  const [users, setUsers] = React.useState<UsersModel[]>([]);
  const [deBouncedFilter] = useDebounce(filter, 800);
  
  
  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${deBouncedFilter}`)
      .then((response) => response.json())
      .then((data) =>{
         setUsers(data)
      });
  }, [deBouncedFilter]);

  return users;  // [users, reset], en vez de {users, reset}

}

export const App = () => {
  const [filter, setFilter] = React.useState("");
  const users = useFilterUsers(filter)
  // const [userFiltered, onReset] = useFilterUsers(filter)
  // const [users:userFiltered, rest:onReset] = useFilterUsers(filter)

  return (
    <>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};
