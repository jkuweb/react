import React from 'react'

interface UserModel {
  id: number;
  name: string;
}

const useUsers = (filter: string) => {
  const [users, setUsers] = React.useState<UserModel[]>([
    {
      id: 0,
      name: "",
    },
  ]);
  const filterDebounce = useDebounce(filter, 800)
  React.useEffect(() => {
    fetch(` https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [filterDebounce]);

  return users;
};

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value)

  React.useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export const App = () => {
  const [filter, setFilter] = React.useState("");
  const users = useUsers(filter);

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
