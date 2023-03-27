import { useState } from "react";

const USComponentArray = () => {
  let num = [1, 2, 3, 4];
  let [numbers, setNumbers] = useState(num);

  //   let changeState = () => {
  //     setNumbers([5, 6, 7, 8]);
  //   };

  let changeState = () => {
    setNumbers((previousState) => {
      return [...previousState, Math.floor(Math.random() * 10)];
    });
  };

  //   setNumbers([1,2,3,4,10]);

  return (
    <div>
      <h1>Array State Variable</h1>
      <ul>
        {numbers.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      <button onClick={changeState}>Change Array</button>
    </div>
  );
};

export default USComponentArray;
