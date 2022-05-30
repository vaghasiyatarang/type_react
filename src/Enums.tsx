import React, { useState } from "react";

//                  enum
// numeric  enum           string enum

const Enums = () => {
  enum phone {
    apple = 1,
    iphone,
    mi = 100,
    onepluse,
  }

  enum day {
    sunday = "sun",
    monday = "mon",
    tuesday = "tues",
    wednesday = "wed",
    thursday = "thur",
    friday = "fri",
    saturday = "sat",
  }

  const [name, setName] = useState("");
  function build(mobil: any) {
    console.log(mobil);
    setName(mobil);
  }
  return (
    <><hr></hr>
    <h1>Enum</h1>
      <h3>{phone.apple}</h3>
      <h3>{phone.mi}</h3>
      <h3>{day.thursday}</h3>

      <button onClick={() => build(phone.mi)}>Click</button>
      <p>{name}</p>
      <hr></hr>
    </>
  );
};

export default Enums;
