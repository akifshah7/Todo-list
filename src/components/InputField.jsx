import React from 'react'

function InputField({itemEvent, addItems, id}) {
  return (
    <>
    <input type="text" placeholder="Add items" onChange={itemEvent} value={addItems} key={id} />

    </>
  )
}

export default InputField