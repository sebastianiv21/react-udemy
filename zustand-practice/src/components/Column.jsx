import './Column.css'
import Task from './Task'
import { useStore } from '../store'
import { shallow } from 'zustand/shallow'
import { useState } from 'react'

const Column = ({ state }) => {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)

  const tasks = useStore(
    (
      store // useStore is a hook that returns the store
    ) => store.tasks.filter((task) => task.state === state),
    shallow // shallow is a performance optimization that only updates the component when the selected state changes
  )
  const addTask = useStore((store) => store.addTask) // addTask is a function that adds a task to the store

  return (
    <div className='column' onDragOver={(e) => e.preventDefault()}>
      <div className='titleWrapper'>
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {tasks.map((task) => (
        <Task key={task.title} title={task.title} />
      ))}
      {open && (
        <div className='Modal'>
          <div className='modalContent'>
            <input
              type='text'
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button
              onClick={() => {
                addTask(text, state)
                setText('')
                setOpen(false)
              }}
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Column
