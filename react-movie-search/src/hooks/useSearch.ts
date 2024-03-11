import React from "react";

export const useSearch = () => {
  const [search, setSearch] = React.useState("");
  const [err, setErr] = React.useState<null | string>(null);

  let isFirstInput = React.useRef(true);

  React.useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search.length > 0;
      return;
    }
    if (search === "") {
      setErr("no puede de ser");
      return;
    }

    if (search.length < 3) {
      setErr("muy peque");
      return;
    }

    setErr(null);
  }, [search]);

  return { search, setSearch, err };
};