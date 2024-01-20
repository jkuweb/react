import { Link } from "react-router-dom";

export const ListPage = () => {
  return (
    <>
      <h1>List page</h1>
      <Link to="/private/detail">Go to Detail</Link>
      <div>---------------------</div>
      <Link to="/">LOGOUT</Link>
    </>
  );
};
