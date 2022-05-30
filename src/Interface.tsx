import React from "react";

const Interface = () => {
  let ob = { name: "tarang", surname: "vaghasiya", age: 22 };

  interface object_interface {
    name: string;
    surname: string;
    age: number;
  }
  let ob2: object_interface = {
    name: "tarang",
    surname: "vaghasiya",
    age: 22,
  };

  return (
    <>
      <hr></hr>
      <h1>Interface</h1>
      <h5>{ob.name}</h5>
      <h5>{ob2.name}</h5>
      <h5>{ob2.age}</h5>
      <hr></hr>
    </>
  );
};

export default Interface;
