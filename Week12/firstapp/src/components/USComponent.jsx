import { useState } from "react";
// Use State with OBJECTS...
const USComponent = () => {
  //   useState with Objects...
  const obj = {
    name: "Alan Smith",
    age: 21,
    height: 5.12,
    isYoung: false,
  };

  const [person, setPerson] = useState(obj);

  const changeState = () => {
    // setPerson({ name: "Bob Smith", age: 23, height: 6.2, isYoung: true });
    // setPerson({ name: "Bob Smith" });
    // testing

    setPerson((previousState) => {
      return { ...previousState, name: "Bob Smith", age: 43 };
    });
  };

  return (
    <div>
      <h2>Use State</h2>
      <hr />
      <h3>Welcome {person.name}!</h3>
      <h3>Age: {person.age}</h3>
      <h3>Height: {person.height}</h3>
      <h3>Young: {person.isYoung.toString()}</h3>
      <button onClick={changeState}>Change</button>
    </div>
  );
};

export default USComponent;
