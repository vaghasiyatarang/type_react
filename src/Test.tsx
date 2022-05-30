import React from "react";

interface test {
  name: string;
  age?: number;
  //   status?:string
  status?: "single" | "comitted";
  salery?: React.ReactNode;
}

const Test = (props: test) => {
  return (
    <>
      <div style={{ border: "1px solid black" ,display:"inline-flex",marginTop:"20px"}}>
        <h3 style={{padding:"10px"}}>name - {props.name}</h3>
        <h3 style={{padding:"10px"}}>age - {props.age}</h3>
        <h3 style={{padding:"10px"}}>status - {props.status}</h3>
      </div>
    </>
  );
};

export default Test;
