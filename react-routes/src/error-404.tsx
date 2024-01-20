import { useNavigate } from "react-router-dom"
export const Error404 = () => {
  const navigate = useNavigate()
  return (
    <>
    <h1>ERROR: 404</h1>
    <button onClick={() => {
      navigate("/")
    }}>Inicio</button>
    </>
  )
}