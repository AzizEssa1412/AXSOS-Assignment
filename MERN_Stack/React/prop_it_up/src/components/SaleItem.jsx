import { useState } from 'react';
import React  from 'react'  
import '../App.css'
function SaleItem(props) {
const [age, setAge] = useState(0);
return (
    <>
    
    <div>
        <h1> {props.name}</h1>
        <h2> {age}</h2>
        <h3> {props.color} </h3>
        <h2>Test--Test--Test--Test--Test--Test</h2>
        <button onClick={()=>setAge(age+1)}>Click Me</button>
    </div>
    </>
)
}

export default SaleItem
