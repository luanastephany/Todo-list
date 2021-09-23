import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import { getTodos, saveTodos } from '../utils'

function TodoList() {
  const [todos, setTodos] = useState(getTodos)

  //add item
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  }

  //edit item
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  //remove item
  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr)
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  return (
    <div>
      <h1>Whats the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo {...{ todos, completeTodo, removeTodo, updateTodo }} />
    </div>
  )
}

export default TodoList
