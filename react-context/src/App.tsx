import React, { PropsWithChildren } from "react";

// interface CounterContextModel {
//   count: number;
//   increment: () => void;
//   decrement: () => void;
//   reset: () => void;
// }
// const CounterContext = React.createContext<CounterContextModel>(null);

// const CounterProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
//   const [count, setCount] = React.useState(0);
//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);
//   const reset = () => setCount(0);
//   return (
//     <CounterContext.Provider
//       value={{
//         count: count,
//         increment: increment,
//         decrement: decrement,
//         reset: reset,
//       }}
//     >
//       {children}
//     </CounterContext.Provider>
//   );
// };

// const Result = () => {
//   const { count } = React.useContext(CounterContext);
//   return <h1>Count: {count}</h1>;
// };

// const Increment = () => {
//   const { increment } = React.useContext(CounterContext);
//   return <button onClick={increment}>Incrementar</button>;
// };

// const Decrement = () => {
//   const { decrement } = React.useContext(CounterContext);
//   return <button onClick={decrement}>Decrement</button>;
// };

// const Reset = () => {
//   const { reset } = React.useContext(CounterContext);
//   return <button onClick={reset}>Reset</button>;
// };
// export const App = () => {
//   return (
//     <>
//       <CounterProvider>
//         <Result />
//         <Increment />
//         <Decrement />
//         <Reset />
//       </CounterProvider>
//     </>
//   );
// };

interface CounterContextModel {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterContext = React.createContext<CounterContextModel>(null);

const CounterProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <CounterContext.Provider
      value={{
        count: count,
        increment: increment,
        decrement: decrement
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

const Increment = () => {
  const { count, increment } = React.useContext(CounterContext);
  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
};
const Decrement = () => {
  const { decrement } = React.useContext(CounterContext);
  return (
    <>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export const App = () => {
  return(
  <CounterProvider>
    <Increment />
    <Decrement />
  </CounterProvider>

  )
};
