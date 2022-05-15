import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import './styles.scss';

TodoList.propTypes = {};

function TodoList({ todoList, onTodoClick }) {
  const handleTodoClick = (todo, index) => {
    if (!onTodoClick) return;
    onTodoClick(todo, index);
  };
  return (
    <ul>
      {todoList.map((todo) => (
        <li
          key={todo.id}
          className={classNames({ completed: todo.status === 'completed' })}
          onClick={() => handleTodoClick(todo, todo.id)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
