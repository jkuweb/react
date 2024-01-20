import { useNavigate } from "react-router-dom";

export const DetailPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Details page</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Atrás
      </button>
    </>
  );
};
