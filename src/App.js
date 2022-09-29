import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'




const App = () => {
  const [showAddTask, setShowAddClass] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'feb 5th at 2:30pm',
      reminder: false
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'feb 6th at 1:30pm',
      reminder: false
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'feb 5th at 2:30pm',
      reminder: false
    },
  ]);

  // add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === task.id ? { ...task, reminder: !task.reminder } : task
    )
    )
  }

  return (
    <div className="container">
      <p className="title">What's the Plan for Today?</p>
      <Header onAdd={() => setShowAddClass(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks To Show ')}
    </div>
  );
}

export default App;
