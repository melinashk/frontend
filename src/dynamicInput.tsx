import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; 

function DynamicInput() {
  const [val, setVal] = useState<{id: string, value: any}[]>([])

  const handleAdd = () => {
    const _id = uuidv4();
    setVal([...val, {id: _id, value: []}])
  }

  const handleChange = (id:string, newValue: string) => {
    const updatedValue = val.map((item) => 
      item.id === id ? {...item, value: newValue} : item
    )
    setVal(updatedValue)
  }
 
  const handleDelete = (id: string) => {
    const deleteVal = val.filter((item) => item.id !== id)
    setVal(deleteVal)
  }
  console.log(val,'data')
  return (
    <div>
      <label>School Name</label>
      <button onClick={() => handleAdd()}>+</button>
      {val.map((item) => {
        return (
          <div key={item.id}>
            <input onChange={(e) => handleChange(item.id, e.target.value)}/>
            <button onClick={() => handleDelete(item.id)}>x</button>
          </div>
        )
      })}
    </div>
  )
}

export default DynamicInput