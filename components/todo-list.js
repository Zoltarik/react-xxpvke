import React from 'react';
import TodoListItem from './todo-list-item';
const TodoList = () => {
  return (
    <ul>
      <li><TodoListItem label="Drink coffe"/></li>
      <li><TodoListItem label="Create React App"
      important/> </li>
    </ul>
  )
};

export default  TodoList;