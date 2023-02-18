import React from 'react'
import { useSelector } from 'react-redux'
import TaskCard from './TaskCard'

const TaskLlist = () => {
const {todos}=useSelector(state=>state)
console.log(todos)

  return (
    <div>
      {
        React.Children.toArray(todos.map(el=><TaskCard task={el}/>))
      }
    </div>
  )
}

export default TaskLlist
