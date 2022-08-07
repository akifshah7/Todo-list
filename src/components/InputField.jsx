import React from 'react'

function InputField({itemEvent, addItems, index}) {
  return (
    <>
    <input type="text" placeholder="Add items" onChange={itemEvent} value={addItems} key={index} />

    </>
  )
}

export default InputField