import React from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../Redux/todoSlice';
import { RootState } from '../Redux/store';

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={id => dispatch(deleteTodo(id))}
        />
      ))}
    </ul>
  );
};

export default TodoList;
