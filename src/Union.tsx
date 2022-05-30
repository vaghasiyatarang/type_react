import React from 'react'

const Union = () => {

    let a:string | number | boolean = "vaghasiya"

  return (
    <div><hr></hr>
      <h1>union</h1>

      <span>{a}</span>
      <hr></hr>
    </div>
  )
}

export default Union