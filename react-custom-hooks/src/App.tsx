import React from "react";

const useFilteredUsers = (filter: string) => {
  const [filteredUsers, setFilteredUsers] = React.useState([
    {
      id: 0,
      name: "",
    },
  ]);
  const filterDebounce = useDebounce(filter, 800)

  const usersNameToUppercase = () => {
     const usersToUppercase = filteredUsers.map((user) => {
      return {
        ...user,  
        name: user.name.toUpperCase()
      }
    })
    setFilteredUsers(usersToUppercase)
  }

  const sortUserList = () => {
    const nextUserList = [...filteredUsers]
    nextUserList.sort((a,b) => {
      if(a.name < b.name) { return -1}
      if(a.name > b.name) { return 1}
      return 0
    })
    setFilteredUsers(nextUserList)
  }

  React.useEffect(() => {
    fetch(` https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
      .then((response) => response.json())
      .then((data) => setFilteredUsers(data));
  }, [filterDebounce]);

  return [filteredUsers, usersNameToUppercase, sortUserList]
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
  const [users, usersToUppercase, sortList] = useFilteredUsers(filter);

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
      <button onClick={usersToUppercase}><span class="material-symbols-outlined">
match_case
</span></button>
      <button onClick={sortList}><span className="material-symbols-outlined">
sort_by_alpha
</span></button>
    </>
  );
};
