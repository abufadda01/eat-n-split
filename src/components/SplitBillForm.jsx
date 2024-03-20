import React from 'react'
import Button from './Button'

const SplitBillForm = () => {
  return (
    <form className='form-split-bill'>

        <h2>Split Bill with -X</h2>

        <label>💰Bill Value</label>
        <input type="text" />

        <label>🧑‍💼Your expense</label>
        <input type="text" />

        <label>🥷X expense</label>
        <input type="text" disabled />

        <label>🤑 who is paying the bill</label>
        <select>
            <option value="user">You</option>
            <option value="friend">X</option>
        </select>

        <Button>Split Bill</Button>

    </form>
  )
}

export default SplitBillForm