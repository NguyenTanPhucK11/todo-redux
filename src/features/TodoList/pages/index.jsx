import React, { useDeferredValue, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, changeStatus } from '../reducers/todoSlice';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState(todoList);
  const [newTodo, setNewTodo] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const handleTodoClick = (todo, index) => {
    const newTodoList = [...todoList];

    newTodoList[index] = {
      ...newTodoList[index],
      status:
        newTodoList[index].status === 'completed' ? 'uncompleted' : 'completed',
    };

    setTodo(newTodoList);
    dispatch(changeStatus(index));
  };
  const handleOnChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo === '') return;
    const newTodoList = [...todo];
    newTodoList[newTodoList.length] = {
      id: newTodoList.length,
      title: newTodo,
      status: 'uncompleted',
    };
    console.log(todoList);
    setTodo(newTodoList);
    dispatch(addTodo(newTodoList));
  };
  const handleShowAll = () => {
    setFilterStatus('all');
  };
  const handleShowCompleted = () => {
    setFilterStatus('completed');
  };
  const handleShowUncompleted = () => {
    setFilterStatus('uncompleted');
  };

  const renderTodoList = todo.filter(
    (todo) => filterStatus === 'all' || filterStatus === todo.status
  );

  return (
    <div>
      <div className="todo__selected">
        <button onClick={handleShowAll}>All</button>
        <button onClick={handleShowCompleted}>Completed</button>
        <button onClick={handleShowUncompleted}>Uncompleted</button>
      </div>
      <form action="">
        <input type="text" onChange={handleOnChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default TodoFeature;
