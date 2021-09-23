const TODOS = 'todos'

export function getTodos() {
  const todosStr = localStorage.getItem(TODOS)
  if (todosStr) return JSON.parse(todosStr)
  return []
}

export function saveTodos(todos) {
  localStorage.setItem(TODOS, JSON.stringify(todos))
}