import React from "react";

export const ExampleOne = () => {
  const [name, setName] = React.useState('joseba')
  const [count, setCount] = React.useState(0)
  return (
    <>
      <h2>Example 1 : primitive value (inmutable)</h2>
      <div>
      <button onClick={()=> setCount(count + 1)}>counter {count}</button>
      </div>
      <MyChildComponent name={name}/>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </>
  )
}

const MyChildComponent = React.memo(({name}) => {
  console.log('me estoy renderizando')
    return ( 
    <>
    <p>{name}</p>
    </>
    )
})