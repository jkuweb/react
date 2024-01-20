const myFunc = (a) => () => {
  console.log({ a });
};

const saluda = myFunc("Hello");
const despide = myFunc("Bye");

saluda();
despide();

const myObject = {
  user: "John",
  age: 30,
  address: "jjdg",
  [field]: "red",
};

const field = "user";

myObject[field];
