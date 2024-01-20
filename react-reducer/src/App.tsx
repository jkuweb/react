import React from "react";

interface Props {
onReset: () => void
}
const ResetValue: React.FC<Props> = React.memo((props) => {
  const { onReset } = props;
  return (
    <>
      <button onClick={onReset}>Borrar</button>
    </>
  );
});

// definimos el reducer

// definir los datos que vamos a tener TIPAR LOS DATOS
interface UserState {
  name: string;
  lastName: string;
}
// TIPAR LAS ACCIONES
interface Action {
  type: string;
  payload: any;
}

// Vamos a agrupar las acciones
const actionIds = {
  setName: "setName",
  setLastName: "setLastName",
  onReset: 'onReset'
};

// Creamos el REDUCER
// es una función que recibe como paramentros el estado anterior, la acción que
// se ejecuta (que va a cambiar el estado)
const userInfoReducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case actionIds.setName:
      return {
        ...state,
        name: action.payload,
      };
    case actionIds.setLastName:
      return {
        ...state,
        lastName: action.payload,
      };
    
    default:
      return state;
  }
};

export const App: React.FC = () => {
 const [userInfo, dispach] = React.useReducer(userInfoReducer, {name:'joseba', lastName:'querejeta'}) 
  const reset = () => {
    dispach({type: actionIds.setName, payload: ''})
    dispach({type: actionIds.setLastName, payload: ''})
  };
  return (
    <>
      <h1>
        {userInfo.name} {userInfo.lastName}
      </h1>
      <div></div>
      <input
        type="text"
        value={userInfo.name}
        onChange={(e) => {
          dispach({type: actionIds.setName, payload: e.target.value})
        }}
      />
      <input
        type="text"
        value={userInfo.lastName}
        onChange={(e) =>
          dispach({type: actionIds.setLastName, payload: e.target.value})
        }
      />
      <ResetValue onReset={reset} />
    </>
  );
};
