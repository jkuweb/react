import React from "react";

export const RenderCount = () => {
  const [info, setInfo] = React.useState("");
  // const [count, setCount] = React.useState(0)

  // A

  // esto provoca un bucle infinito
  // React.useEffect(()=> {
  //   setCount(count + 1)
  // }, [count])

  // B

  // let count = 0;
  // React.useEffect(()=> {
  //   console.log('me estoy renderizando')
  //   count++
  // })

  // NUNCA SE HACE ESTO
  //  const [render, setRender] = React.useState({
  //   count: 0
  //  })
  //  React.useEffect(()=> {
  //   render.count++
  //  })

  //Persistencia pero sin que provoque reactividad
  const renderCount = React.useRef<number>(0);
  React.useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  return (
    <>
      {/* <h1>Count:{render.count} </h1> */}
      <h1>Render Count:{renderCount.current} </h1>
      <input
        type="text"
        value={info}
        onChange={(e) => setInfo(e.target.value)}
      />
    </>
  );
};

export const DomRef = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const handleClick = () => {
    const inputCurrent = inputRef.current as HTMLInputElement;
    inputCurrent.focus();
    inputCurrent.style.border = "8px solid pink";
    inputCurrent.addEventListener("focusin", (e) => {
      const eTarget = e.target as HTMLInputElement;
      eTarget.style.border = "8px solid pink";
    });
    inputCurrent.addEventListener("focusout", (e) => {
      const eTarget = e.target as HTMLInputElement;
      eTarget.style.border = "none";
    });
  };
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>buscar</button>
    </>
  );
};
