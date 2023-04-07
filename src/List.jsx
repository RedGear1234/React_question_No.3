import React from "react"

export function List({items}){

 return (
  <>
   <ul>
      {items.map((item)=>(
        <li>{item}</li>
      ))}
   </ul>
  </>
 ) 
}