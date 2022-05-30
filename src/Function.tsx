import React from "react";
import { useState } from "react";

const Function = () => {
  const [time, setTime] = useState("");
  function fortime(): any {
    setTime(new Date().toLocaleDateString());
  }
  const [value, setValue] = useState("");

  function forvalue(a: number, b?: number): any {
    let total = b ? a + b : a;
    setValue(JSON.stringify(total));
  }

  

  return (
    <>
      <div>
        <hr></hr>
        <h1>function</h1>
        <div className="container">
          <div className="row" style={{ display: "inline-flex" }}>
            <div className="col-4" style={{ margin: "0 20px" }}>
              <h4>{time}</h4>
              <button onClick={() => fortime()}>get time</button>
            </div>

            <div className="col-4" style={{ margin: "0 20px" }}>
              <h4>{value}</h4>
              <button onClick={() => forvalue(10, 20)}>Value</button>
            </div>
          </div>
        </div><hr></hr>
      </div>
    </>
  );
};

export default Function;
