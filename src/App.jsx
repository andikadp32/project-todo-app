import React, { useState } from 'react'
import Todos from './components/Todos'

function App () {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

  console.log(todos)

  const toggleCompleted = (todoId) => {
    const updateTodos = todos.map((todo) => {
      if(todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updateTodos)
  }

  const deleteTodo = (todoId) => {
    const updateTodos = todos.filter(todo => todo.id !== todoId)
    return setTodos(updateTodos)
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
}

export default App
