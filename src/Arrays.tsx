import React from "react";

const Arrays = () => {
  let array: number[] = [1, 2, 3, 4, 5];
  array.push(6);

  let array1: string[] = ["mi", "onepluse", "iphone"];
  // array1.push(1)
  array1.push("oppo");

  let array3 = ["tarang", "contra", "mario", 10];
  array3.push(100);
  array3.push("supar");

  let ourTuple: [number, boolean, string];
  ourTuple = [5, false, 'Coding God was here'];




  return (
    <>
    <hr></hr>
    <h1>Array</h1>
      <h3>{array}</h3>
      <h3>{array1}</h3>
      <h3>{ourTuple}</h3>
      <hr></hr>
    </>
  );
};

export default Arrays;
