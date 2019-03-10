export const todoActionNames = {
  ADD_TODO: "ADD_TODO",
  COMPLETE_TRODO: "COMPLETE_TODO",
  DELETE_TODO: "DELETE_TODO"
}

export const todoActions = {
  addTodo: (data) => {
    return {
      type: todoActionNames.ADD_TODO,
      payload: {
        data: data
      }
    }
  },
  completeTodo: (id) => {
    return {
      type: todoActionNames.COMPLETE_TRODO,
      payload: {
        id: id
      }
    }
  }
}