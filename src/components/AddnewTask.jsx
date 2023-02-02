import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleAdd } from '../redux/action';

const AddnewTask = () => {
    const [text, setText] = useState(" bienvenue redux ");
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newOne={
            id:Math.random(),action:text,isDone:false
        }
        dispatch(handleAdd(newOne))
    }
  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <input type="text"  value={text} onChange={e=>setText(e.target.value)}/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddnewTask
