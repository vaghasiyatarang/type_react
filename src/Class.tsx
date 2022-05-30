import React, { useState } from "react";

const Class = () => {
  class saree {
    name: string = "kanjivaramsilk";
    colo: string = "red";
    prise: number = 600;
  }
  let newsaree = new saree();

  class market {
    name: string = "avagh";
    total_shop: number = 4000;

    name1: string = "global";
    total_shop1: number = 5000;

    name2: string = "bombey";
    total_shop2: number = 2000;

    count() {
      return (
        this.name,
        this.total_shop,
        this.name1,
        this.total_shop1,
        this.name2,
        this.total_shop2
      );
    }
  }
  return (
    <div>
      <hr></hr>
      <h1>Class</h1>
      <br></br>
      <div className="container">
        <div className="row" style={{display:"inline-flex"}}>
          <div className="col-4" style={{margin:"0px 40px"}}>
          <h3>{newsaree.name}</h3>
          </div>
          <div className="col-4" style={{margin:"0px 40px"}}>
          <h3>{newsaree.prise}</h3>
          </div>
          <div className="col-4" style={{margin:"0px 40px"}}>
          <h3>{newsaree.colo}</h3>
          </div>
        </div>
      </div>
      
      
      

      <div className="container">
        <div className="row" style={{display:"inline-flex"}}>
          <div className="col-4">
            <h1>market name  {new market().name}</h1>
            <h1>total shop in the market  {new market().total_shop}</h1>
          </div>
          <div className="col-4">
            <h1>market name  {new market().name1}</h1>
            <h1>total shop in the market  {new market().total_shop1}</h1>
          </div>
          <div className="col-4">
            <h1>market name  {new market().name2}</h1>
            <h1>total shop in the market  {new market().total_shop2}</h1>
          </div>
        </div>
      </div>

      <hr></hr>
    </div>
  );
};

export default Class;