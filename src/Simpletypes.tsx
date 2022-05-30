import React from "react";

const Simpletypes = () => {
  let a: number = 100;
  let b: string = "hello this is type script";
  let c: boolean = true;

  let a1: any = "special type any";
  return (
    <div>
      <hr></hr>
      <h1>type</h1>
      <h2>{a}</h2>
      <h2>{b}</h2>
      <h2>{c}</h2>
      <h2>{typeof a}</h2>
      <h2>{typeof b}</h2>
      <h2>{typeof c}</h2>

      <h3>{a1}</h3>
      <hr></hr>
    </div>
  );
};

export default Simpletypes;
