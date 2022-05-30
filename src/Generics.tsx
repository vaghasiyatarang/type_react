import React, { useState } from "react";
import { updateSourceFile } from "typescript";

const Generics = () => {
const [val,setVal]= useState("")

function generics<G>(data:G){
    return(
        setVal(JSON.stringify(data))
    )
}



  return (
    <div>
      <hr></hr>
        <h1>Generics</h1>
        <p>{val}</p>
        <button onClick={() => generics({name:"rv",age:22})}>Generics</button>
      <hr></hr>
    </div>
  );
};

export default Generics;
