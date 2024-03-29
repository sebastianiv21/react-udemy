import classNames from 'classnames'
import './Task.css'
import trash from '../assets/trash-2.svg'
import { useStore } from '../store'

const STATUS = 'ONGOING'

export default function Task({ title }) {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  )

  const deleteTask = useStore((store) => store.deleteTask)

  return (
    <div className='task' draggable>
      <div>{task.title}</div>
      <div className='bottomWrapper'>
        <div>
          <img src={trash} onClick={() => deleteTask(task.title)} />
        </div>
        <div className={classNames('status', task.state)}>{task.state}</div>
      </div>
    </div>
  )
}
