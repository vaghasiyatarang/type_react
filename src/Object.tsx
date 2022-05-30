import React from 'react'

const Object = () => {
    let car:{name:string,model:number} = {name:"verna",model:2015};
     car.name="elentra";
    //  car.company:"hundai"
  return (
      <>
      <hr></hr>
      <h1>Object</h1>
        <h3>{car.name}</h3>
        <h3>{car.model}</h3>
        <hr></hr>
      </>
  )
}

export default Object;