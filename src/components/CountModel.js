import React, {useRef, useState} from "react";

function CountModel({name, value, setValue}) {
   
  return (
    <div style={{margin: "50px"}}>
         <input  type="number" value={value} onChange={(e) => setValue(e.target.value)} />
        <h4>{name}</h4>
        <h1>{value}</h1>
        <div className="btn-group">
        <button className="minus" onClick={() => setValue(value-1)}>-</button>
        <button className="plus" onClick={() => setValue(value+1)}>+</button>
        </div>
       
    </div>
  )
}

export default CountModel